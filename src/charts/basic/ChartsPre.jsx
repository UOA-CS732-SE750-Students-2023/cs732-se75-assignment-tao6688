import ReactEchart from "echarts-for-react";

import Mock from "mockjs";
import { Random } from 'mockjs';
export default function Charts04() {
 
  var option2 = {
      title: {
          text: 'Prerequisite courses',
          left: 'center'
      },
      tooltip:{
        trigger: 'item'
      },
      legend: {
        top: '5%',
        left: 'right'
      },
      series: [
        {
          name: 'Prerequisite',
          type: 'pie',
          radius: ['40%', '70%'],
          avoidLabelOverlap: false,
          itemStyle: {
            borderRadius: 10,
            borderColor: '#fff',
            borderWidth: 2
          },
          label: {
            show: false,
            position: 'center'
          },
          emphasis: {
            label: {
              show: true,
              fontSize: 40,
              fontWeight: 'bold'
            }
          },
          labelLine: {
            show: false
          },
          data: [
            { value: 70, name: 'COMPSCI 335' },
            { value: 25, name: 'COMPSCI 210' },
            { value: 5, name: 'ACADINT A01' }
          ]
        }
      ]
    };
    return (
      <div style={{
          width: 600,
          height: 500,
          display: "inline-block",
          margin: 30,
      }}> 
          <ReactEchart style={{
                  width: 400,
                  height: 400,
              }} option={option2} />
      </div>
  );
}
