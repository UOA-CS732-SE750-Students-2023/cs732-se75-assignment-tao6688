import EChartsReact from "echarts-for-react";
import NZ from "../../json/New_Zealand.json";
import * as echarts from 'echarts';
import { useRef, } from 'react';
import "./style.module.css"

echarts.registerMap('map', NZ);//register the map

export default function Charts03Map() {
    let name = 'New Zeealand Map';
    let curRef = useRef(null);
 
    var option3 = {
        title: {
            text: name,
            textStyle: {
                color: "#000",
            },
            left: 'left',
        },
        tooltip: {
            trigger: 'item',
            showDelay: 0,
            transitionDuration: 0.2
        },
        visualMap: {
            left: 'right',
            min: 50000,  //Set the range
            max: 380000,
            inRange: {
                color: [
                '#313695',
                '#4575b4',
                '#74add1',
                '#abd9e9',
                '#e0f3f8',
                '#ffffbf',
                '#fee090',
                '#fdae61',
                '#f46d43',
                '#d73027',
                '#a50026'
                ]
            },
            text: ['High', 'Low'],
            calculable: true
        },
        toolbox: {
            show: true,
            //orient: 'vertical',
            left: 'right',
            top: 'top',
            feature: {
                dataView: { readOnly: false },
                restore: {},
                saveAsImage: {}
            }
        },
        series: [
            {
                name: 'NZ',
                type: 'map',
                mapType: 'map',
                scaleLimit: {
                    min: 0.5, // Minimum size of the roller zoom
                    max: 10, // Maximum size of the roller zoom
                },
 
                label: { 
                    show: true, //show the city names
                    position: [1, 100], // relative ratios
                    fontSize: 12,
                    offset: [2, 0], // shifting
                    align: "left" 
                },
                itemStyle: {
                    areaColor: "#fff" // Map color
                },
                roam: true, 
                zoom: 1.15, // The zoom scale of the current viewing
                data: [
                    { name: 'Auckland', value: 360414 },
                    { name: 'Bay of Plenty', value: 7314 },
                    { name: 'Canterbury', value: 65532 },
                    { name: 'Gisborne', value: 29491 },
                    { name: 'Hawke\'s Bay', value: 48220 },
                    { name: 'Manawatu-Wanganui', value: 51875 },
                    { name: 'Marlborough', value: 35904 },
                    { name: 'Nelson', value: 9179 },
                    { name: 'Northland', value: 6323 },
                    { name: 'Otago', value: 193175 },
                    { name: 'Southland', value: 99199 },
                    { name: 'Taranaki', value: 13921 },
                    { name: 'Waikato', value: 15952 },
                    { name: 'Wellington', value: 127255 },
                    { name: 'West Coast', value: 65334 },
                    { name: 'Tasman', value: 65373 }
                  ]
            }
        ]
    };

return (<div>
        <EChartsReact className='bazaarMap' option={option3} ref={curRef} style={{ width: 600, height: 600, margin:'0 auto', zIndex: 222 }}/>
    </div>);
}
