import React, { useRef, useEffect } from "react";
import * as echarts from "echarts";
import { useColorModeValue } from "@chakra-ui/react";
import theme from "../theme";

const PieChart: React.FC = () => {
  const txtcolors = useColorModeValue(
    theme.txtcolors.light,
    theme.txtcolors.dark
  );
  const chartRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (chartRef.current) {
      const chart = echarts.init(chartRef.current);
      const option: echarts.EChartOption = {
        tooltip: {
          trigger: "item",
        },
        legend: {
          top: "5%",
          left: "center",
          textStyle: {
            //@ts-ignore
            color: { txtcolors }, // Change title text color
          },
        },
        series: [
          {
            name: "Access From",
            type: "pie",
            radius: ["40%", "70%"],
            avoidLabelOverlap: false,
            label: {
              show: false,
              position: "center",
            },
            emphasis: {
              label: {
                show: true,
                fontSize: 20,
                fontWeight: "bold",
              },
            },
            labelLine: {
              show: false,
            },
            data: [
              { value: 37, name: "Ruby on Rails" },
              { value: 23, name: "ReactJs" },
              { value: 9, name: "NodeJs" },
              { value: 16, name: "SQL" },
              { value: 9, name: "C++" },
              { value: 6, name: "Others" },
            ],
            //@ts-ignore
            color: ["#9369cc", "#dd77aa", "orange", "#ffcc00", "#00bb00", "#997700"],
            itemStyle: {
              emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)",
              },
            },
          },
        ],
      };
      chart.setOption(option);
      return () => {
        chart.dispose();
      };
    }
  }, []);
  return <div ref={chartRef} style={{ width: "100%", height: "300px" }} />;
};

export default PieChart;
