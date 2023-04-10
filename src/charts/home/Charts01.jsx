import EChartsReact from "echarts-for-react";
import Mock from "mockjs";

export default function Charts01() {
  const stu=[];

  const names = [];
  const grades = [];
  for(let i=0;i<7;i++){
    names.push(Mock.mock(Mock.Random.first()))
    grades.push(Mock.mock(Mock.Random.natural(80,100)))
  }
  // var a = 0;
  // for(let i=0;i<7;i++){
  //   if(grades[i] == grades.sort().reverse()[0]){  //Find the max
  //     grades[i]={
  //       'value':grades[i], 
  //       itemStyle: {
  //         color: '#a90000'
  //       }
  //     };
  //     a++;
  //   }
  // }
  // console.log(a);
  // const res = await charts01();
  // res.data.map(m => {
  //   return names.push(m.name)
  // })
  // res.data.map(m => {
  //   return  grades.push(m.grade)
  // })


 
  var option1 = {
      title: {
          text: 'Some better grades',
          left: 'center'
      },
      xAxis: {
        type: 'category',
        data: names
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          data: grades,
          showBackground: true,
          type: 'bar'
        }
      ]
    };
  return (
      <div style={{
          width: 800,
          height: 500,
          display: "inline-block",
      }}> 
          <EChartsReact style={{
                  width: 800,
                  height: 500,
              }} option={option1} />
      </div>
  );
}
