import ReactEchart from "echarts-for-react";

import Mock from "mockjs";
import { Random } from 'mockjs';
export default function ChartsNow() {
 
  var option2 = {
    legend: {},
    tooltip: {},
    dataset: {
        dimensions: ['product', 'Min', 'Me', 'Max'],
        source: [
            { product: 'Assignment1', Min: 43.3, Me: 85.8, Max: 93.7 },
            { product: 'Assignment2', Min: 60.1, Me: 73.4, Max: 88.1 },
            { product: 'Test', Min: 66.4, Me: 76.2, Max: 99.5 },
            { product: 'Assignment3'},
            { product: 'Assignment4'},
            { product: 'Final Exam'},
        ]
    },
    xAxis: { 
        type: 'category',
        data: ['Assignment1', 'Assignment2', 'Test', 'Assignment3','Assignment4','Final Exam']
    },
    yAxis: {},
    series: [{ type: 'bar' }, { type: 'bar' }, { type: 'bar' }]
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
