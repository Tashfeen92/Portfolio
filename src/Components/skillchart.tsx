import React, { useRef, useEffect } from "react";
import * as echarts from "echarts";
import { useColorModeValue } from "@chakra-ui/react";
import theme from "../theme";

const skillLevels = [
  { skill: "Ruby", level: "expert" },
  { skill: "Ruby on Rails", level: "medium" },
  { skill: "ReactJs", level: "medium" },
  { skill: "Js", level: "expert" },
  { skill: "c++", level: "expert" },
  { skill: "Ts", level: "expert" },
  { skill: "others", level: "medium" },
  { skill: "Node", level: "expert" },
  { skill: "Java", level: "medium" },
  { skill: "React", level: "medium" },
  { skill: "Js", level: "expert" },
  { skill: "c++", level: "expert" },
  { skill: "Ts", level: "expert" },
  { skill: "others", level: "medium" },
];

const getSkillLevelHeight = (level: any) => {
  switch (level) {
    case "beginner":
      return 1; // Smallest height
    case "medium":
      return 2; // Medium height
    case "expert":
      return 3; // Tallest height
    default:
      return 2; // Default medium height
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
