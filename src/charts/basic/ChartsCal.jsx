import ReactEchart from "echarts-for-react";
import * as echarts from 'echarts';

import Mock from "mockjs";
import { Random } from 'mockjs';

function getVirtualData(year) {
    const date = +echarts.time.parse(year + '-02-26');
    const end = +echarts.time.parse(year + '-7-1');
    const dayTime = 3600 * 24 * 1000;
    const data = [];
    for (let time = date; time <= end; time += dayTime) {
      data.push([
        echarts.time.format(time, '{yyyy}-{MM}-{dd}', false),
        Math.floor(Math.random() * 10000)
      ]);
    }
    return data;
  }

export default function ChartsCal() {
 
  var option2 = {
    visualMap: {
        show: false,
        min: 0,
        max: 10000
      },
      calendar: {
        yearLabel: { margin: 36 },
        monthLabel: {
          nameMap: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'July'],
          margin: 10
        },
        dayLabel: {
          firstDay: 7,
          nameMap: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
        },
        range: '2023'
      },
      series: {
        type: 'heatmap',
        coordinateSystem: 'calendar',
        data: getVirtualData('2023')
      }
    };
    return (
      <div style={{
          width: 800,
          height: 500,
          display: "inline-block",
          margin: 20,
      }}> 
          <ReactEchart style={{
                  width: 700,
                  height: 400,
              }} option={option2} />
      </div>
  );
}
