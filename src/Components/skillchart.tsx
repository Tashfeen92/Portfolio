import React, { useRef, useEffect } from "react";
import * as echarts from "echarts";
import { useColorModeValue } from "@chakra-ui/react";
import theme from "../theme";

const skillLevels = [
  { skill: "Ruby", level: "expert" },
  { skill: "Ruby on Rails", level: "expert" },
  { skill: "Embedded Ruby", level: "above_average" },
  { skill: "RESTful API", level: "expert" },
  { skill: "API Testing", level: "above_average" },
  { skill: "Hotwire", level: "average" },
  { skill: "ReactJs", level: "expert" },
  { skill: "Redux", level: "expert" },
  { skill: "NodeJS", level: "above_average" },
  { skill: "ExpresJS", level: "above_average" },
  { skill: "jQuery", level: "average" },
  { skill: "SQL", level: "expert" },
  { skill: "MongoDB", level: "above_average" },
];

const getSkillLevelHeight = (level: any) => {
  switch (level) {
    case "beginner":
      return 1;
    case "below_average":
        return 1.5;
    case "average":
      return 2;
    case "above_average":
        return 2.5;
    case "expert":
      return 3;
    default:
      return 2;
  }
};

const getRandomColor = () => {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

const PieChartS: React.FC = () => {
  const txtcolors = useColorModeValue(
    theme.txtcolors.light,
    theme.txtcolors.dark
  );
  const chartRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (chartRef.current) {
      const chart = echarts.init(chartRef.current);
      const colors = skillLevels.map(() => getRandomColor()); // Generate colors
      const option: echarts.EChartOption = {
        title: {
          text: "Skills",
          left: "center",
          textStyle: {
            color: txtcolors,
          },
        },
        tooltip: {
          trigger: "axis",
        },
        xAxis: {
          type: "category",
          data: skillLevels.map((entry) => entry.skill),
          axisLabel: {
            rotate: 45,
            interval: 0,
          },
        },
        yAxis: {
          type: "value",
        },
        series: [
          {
            name: "Skill Level",
            type: "bar",
            data: skillLevels.map((entry) => getSkillLevelHeight(entry.level)),
            itemStyle: {
              color: (params: any) => colors[params.dataIndex], // Use colors for each bar
            },
          },
        ],
      };
      chart.setOption(option);

      return () => {
        chart.dispose();
      };
    }
  }, [txtcolors]);

  return <div ref={chartRef} style={{ width: "100%", height: "240px" }} />;
};

export default PieChartS;
