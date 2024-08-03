import React, { useRef, useEffect } from 'react';
import * as echarts from 'echarts';
import { useColorModeValue } from '@chakra-ui/react';
import theme from '../theme';


const PieChart: React.FC = () => {
  const txtcolors=useColorModeValue(theme.txtcolors.light,theme.txtcolors.dark);
  const chartRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (chartRef.current) {
      const chart = echarts.init(chartRef.current);

      const option: echarts.EChartOption = {
        tooltip: {
          trigger: 'item',
        },
        legend: {
          top: '5%',
          left: 'center',
          textStyle: {
            //@ts-ignore
            color: {txtcolors}, // Change title text color
          },
        },
        series: [
          {
            name: 'Access From',
            type: 'pie',
            radius: ['40%', '70%'],
            avoidLabelOverlap: false,
            label: {
              show: false,
              position: 'center',
            },
            emphasis: {
              label: {
                show: true,
                fontSize: 20,
                fontWeight: 'bold',
              },
            },
            labelLine: {
              show: false,
            },
            data: [
              { value: 51, name: 'MERN' },
              { value: 32, name: 'Android' },
              { value: 17, name: 'Others' },
            ],
            //@ts-ignore
            color: ['#9318cc', '#ff9800', '#ff69b4'], // Blue, Orange, Pink
            itemStyle: {
              emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)',
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

  return <div ref={chartRef} style={{ width: '100%', height: '300px' }} />;
};

export default PieChart;
