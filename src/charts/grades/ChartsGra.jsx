import ReactEchart from "echarts-for-react";

import Mock from "mockjs";
import { Random } from 'mockjs';
export default function ChartsGra() {
 
  var option2 = {
    legend: {},
    tooltip: {
      trigger: 'axis',
      showContent: false
    },
    dataset: {
      source: [
        ['product', '2020S1', '2020S2', '2021S1', '2021S2', '2022S1', '2022S2'],
        ['Final grades', 70.5, 82.1, 88.7, 70.1, 76.4, 85.1],
        ['Assignment grades', 51.1, 51.4, 55.1, 53.3, 73.8, 68.7],
        ['Group grades', 40.1, 62.2, 69.5, 36.4, 45.2, 32.5],
        ['Test grades', 25.2, 37.1, 41.2, 18, 33.9, 49.1]
      ]
    },
    xAxis: { type: 'category' },
    yAxis: { gridIndex: 0 },
    grid: { top: '45%' },
    series: [
      {
        type: 'line',
        smooth: true,
        seriesLayoutBy: 'row',
        emphasis: { focus: 'series' }
      },
      {
        type: 'line',
        smooth: true,
        seriesLayoutBy: 'row',
        emphasis: { focus: 'series' }
      },
      {
        type: 'line',
        smooth: true,
        seriesLayoutBy: 'row',
        emphasis: { focus: 'series' }
      },
      {
        type: 'line',
        smooth: true,
        seriesLayoutBy: 'row',
        emphasis: { focus: 'series' }
      },
      {
        type: 'pie',
        id: 'pie',
        radius: '30%',
        center: ['50%', '25%'],
        emphasis: {
          focus: 'self'
        },
        label: {
          formatter: '{b}: {@2020S1} ({d}%)'
        },
        encode: {
          itemName: 'product',
          value: '2020S1',
          tooltip: '2020S1'
        }
      }
    ]
    };
    return (
        <div style={{
            width: 800,
            height: 500,
            display: "inline-block",
            margin: 30,
        }}> 
            <ReactEchart style={{
                    width: 750,
                    height: 500,
                }} option={option2} />
        </div>
    );
}
