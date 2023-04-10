import ReactEchart from "echarts-for-react";

import Mock from "mockjs";
import { Random } from 'mockjs';
export default function Charts03() {

 
  var option2 = {
      title: {
          text: 'Programming composition',
          left: 'center'
      },
      radar: {
        // shape: 'circle',
        indicator: [
          { name: 'React', max: 6500 },
          { name: 'MongoDB', max: 6500 },
          { name: 'Node.js', max: 6500 },
          { name: 'Git', max: 6500 },
          { name: 'JavaScript', max: 6500 },
          { name: 'TypeScript', max: 6500 }
        ]
      },
      series: [
        {
          type: 'radar',
          data: [
            {
              value: [5500, 5000, 4000, 3500, 5000, 1800],
              name: 'Spending'
            }
          ]
        }
      ]
    };
    return (
        <div style={{
            width: 750,
            height: 500,
            display: "inline-block",
            margin: 30,
        }}> 
            <ReactEchart style={{
                    width: 500,
                    height: 500,
                }} option={option2} />
        </div>
    );
}
