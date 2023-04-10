import ReactEchart from "echarts-for-react";

export default function LineChart() {

    var eChartsOption = {
        title: {
            text: 'Number of students'
        },
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            data: ['Enroll','Drop'],
            left: 'right'
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: {
            type: "category",
            boundaryGap: false,
            data: ['2019S2', '2020S1', '2020S2', '2021S1', '2021S2', '2022S1', '2022S2']
        },
        yAxis: {
            type: "value",
        },
        series: [
            {
                name: 'Enroll',
                type: 'line',
                data: [200,120,0,160,150,220,200]
            },
            {
                name: 'Drop',
                type: 'line',
                data: [6,10,0,5,0,1,2]
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