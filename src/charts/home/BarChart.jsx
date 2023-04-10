import EChartsReact from "echarts-for-react";
// import s from "./style.module.css"

export default function BarChart() {
    const x = 100;
    const y = 200;
    const z = 300;
    var a = 400;
    
    a = a+100;
    var option2 = {
        title: {
            text: 'Number of students in workdays',
            left: 'center'
        },
        xAxis: {
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri']
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            data: [
              120,
              {
                value: 200,
                itemStyle: {
                  color: '#a90000'
                }
              },
              150,
              80,
              70
            ],
            type: 'bar'
          }
        ]
      };
    return (
        <div id="bar" style={{
            width: 500,
            height: 500,
            display: "inline-block"
        }}> 
            <EChartsReact style={{
                    width: 500,
                    height: 500,
                }} option={option2} />
        </div>
    );
}

