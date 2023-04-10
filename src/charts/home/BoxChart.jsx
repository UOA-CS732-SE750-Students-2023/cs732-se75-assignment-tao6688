import ReactEchart from "echarts-for-react";
import Mock from "mockjs";
import { Random } from 'mockjs';

export default function BoxChart() {
    const sem = ['2019S2', '2020S1', '2020S2', '2021S1', '2021S2'];
    const tops = [];
    const means = [];
    const lows = [];
    for(let i=0;i<7;i++){
      tops.push(Mock.mock(Mock.Random.natural(90,100)))
      means.push(Mock.mock(Mock.Random.natural(60,70)))
      lows.push(Mock.mock(Mock.Random.natural(50,60)))
    }
    tops[2]=0;
    means[2]=0;
    lows[2]=0;
    var eChartsOption = {
        title: [
            {
              text: 'Final grades for previous semesters',
              left: 'center'
            },
            {
              text: 'upper: Q3 + 1.5 * IQR \nlower: Q1 - 1.5 * IQR',
              borderColor: '#999',
              borderWidth: 1,
              textStyle: {
                fontWeight: 'normal',
                fontSize: 14,
                lineHeight: 20
              },
              left: '10%',
              top: '90%'
            }
          ],
          dataset: [
            {
              // prettier-ignore
              source: [
                        [85, 74, 90, 107, 93, 85, 95, 98, 98, 88, 100, 98, 93, 65, 76, 81, 100, 100, 96, 96],
                        [96, 94, 96, 94, 88, 80, 85, 88, 90, 84, 83, 79, 81, 88, 88, 83, 80, 79, 76, 80],
                        [88, 88, 88, 86, 72, 72, 62, 86, 97, 95, 88, 91, 85, 87, 84, 84, 85, 84, 84, 84],
                        [89, 81, 81, 82, 80, 77, 76, 74, 75, 76, 91, 92, 89, 86, 88, 72, 84, 85, 85, 78],
                        [89, 84, 78, 81, 76, 81, 79, 81, 82, 85, 87, 87, 81, 74, 81, 94, 95, 80, 81, 87],
                    ]
            },
            {
              transform: {
                type: 'boxplot',
                config: { itemNameFormatter: function (params) {
                    return sem[params.value];
                }
            }
              }
            },
            {
              fromDatasetIndex: 1,
              fromTransformResult: 1
            }
          ],
          tooltip: {
            trigger: 'item',
            axisPointer: {
              type: 'shadow'
            }
          },
          grid: {
            left: '10%',
            right: '10%',
            bottom: '15%'
          },
          xAxis: {
            type: 'category',
            boundaryGap: true,
            nameGap: 30,
            splitArea: {
              show: false
            },
            splitLine: {
              show: false
            }
          },
          yAxis: {
            type: 'value',
            name: 'points',
            splitArea: {
              show: true
            }
          },
          series: [
            {
              name: 'boxplot',
              type: 'boxplot',
              datasetIndex: 1
            },
            {
              name: 'outlier',
              type: 'scatter',
              datasetIndex: 2
            }
          ]
    };
    return (
        <div style={{
            width: 660,
            height: 500,
            display: "inline-block",
            margin: 30,
        }}> 
            <ReactEchart style={{
                    width: 500,
                    height: 500,
                }} option={eChartsOption} />
        </div>
    );
}