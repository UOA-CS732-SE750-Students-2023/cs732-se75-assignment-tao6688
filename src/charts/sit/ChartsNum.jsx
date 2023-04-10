import ReactEchart from "echarts-for-react";

import Mock from "mockjs";
import { Random } from 'mockjs';
export default function ChartsNum() {

  var option2 = {
    tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'cross',
          crossStyle: {
            color: '#999'
          }
        }
      },
      toolbox: {
        feature: {
          dataView: { show: true, readOnly: false },
          magicType: { show: true, type: ['line', 'bar'] },
          restore: { show: true },
          saveAsImage: { show: true }
        }
      },
      legend: {
        data: ['Submitted StuNum', 'Total StuNum']
      },
      xAxis: [
        {
          type: 'category',
          data: ['A1', 'A2', 'Test', 'A3','A4','Final Exam'],
          axisPointer: {
            type: 'shadow'
          }
        }
      ],
      yAxis: [
        {
          type: 'value',
          name: 'StuNum',
          min: 0,
          max: 300,
          interval: 50,
        }
      ],
      series: [
        {
          name: 'Submitted StuNum',
          type: 'bar',
          data: [
            260, 251, 260,100
          ]
        },
        {
          name: 'Total StuNum',
          type: 'line',
          data: [260, 260, 260, 260, 260, 260]
        }
      ]
    };
    return (
        <div style={{
            width: 1000,
            height: 500,
            display: "inline-block",
            margin: 30,
        }}> 
            <ReactEchart style={{
                    width: 800,
                    height: 500,
                }} option={option2} />
        </div>
    );
}
