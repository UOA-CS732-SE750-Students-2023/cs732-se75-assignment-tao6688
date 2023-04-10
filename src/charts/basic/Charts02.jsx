import ReactEchart from "echarts-for-react";

import Mock from "mockjs";
import { Random } from 'mockjs';
export default function Charts02() {
  const subnames = ['Assignments','Test','Project','Exam'];
  const grades = [];
  for(let i=0;i<4;i++){
    grades.push(Mock.mock({
        'name':subnames[i],
        'value':Mock.Random.natural(0,100)
    }))
  }
 
  var option2 = {
      title: {
          text: 'Grade composition',
          left: 'center'
      },
      tooltip:{
        trigger: 'item'
      },
      legend: {
        orient: 'vertical',
        left: 'left'
      },
      series: [
        {
          data: grades,
          type: 'pie'
        }
      ]
    };
    return (
      <div style={{
          width: 650,
          height: 500,
          display: "inline-block",
          margin: 30,
      }}> 
          <ReactEchart style={{
                  width: 500,
                  height: 400,
              }} option={option2} />
      </div>
  );
}
