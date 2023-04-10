import EChartsReact from "echarts-for-react";
import Mock from "mockjs";

export default function NigChart() {
    const ratios = [];
    const names = ['Recommend','Helpful','Excited','Wonderful','Relaxed','Difficult']
    ratios[0] = {
        'value': Mock.Random.natural(300,400),
        'name': names[0]
    }
    ratios[1] = {
        'value': Mock.Random.natural(260,300),
        'name': names[1]
    }
    ratios[2] = {
        'value': Mock.Random.natural(200,260),
        'name': names[2]
    }
    ratios[3] = {
        'value': Mock.Random.natural(150,200),
        'name': names[3]
    }
    ratios[4] = {
        'value': Mock.Random.natural(100,150),
        'name': names[4]
    }
    ratios[5] = {
        'value': Mock.Random.natural(50,80),
        'name': names[5]
    }
 
 
    var option1 = {
        title: {
            text: 'Nightingale course evaluation',
            left: 'center'
        },
        tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b} : {c} ({d}%)'
        },
        legend: {
            top: 'bottom'
        },
        toolbox: {
            show: true,
            feature: {
                mark: { show: true },
                dataView: { show: true, readOnly: false },
                restore: { show: true },
                saveAsImage: { show: true }
            }
        },
        series: [
            {
                name: 'Evaluation',
                type: 'pie',
                radius: [30, 160],
                center: ['50%', '50%'],
                roseType: 'area',
                itemStyle: {
                  borderRadius: 5
                },
                data: ratios
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
