import React from "react";

import Navbar from "../Navbar";
import Charts02 from "../../charts/basic/Charts02";
import Charts03 from "../../charts/basic/Charts03";
import ChartsPre from "../../charts/basic/ChartsPre";
import ChartsCal from "../../charts/basic/ChartsCal";

const Basic = () => {
    return(
        <>
        <Navbar/>
        <div style={{textAlign: 'left', color: 'rgb(6, 6, 43)'}}>
            <h2>Basic information</h2>
        </div>
        <ChartsPre/>
        <Charts02/>
        <div style={{textAlign: 'left', color: 'rgb(6, 6, 43)'}}>
            <h2>Programming skills</h2>
        </div>
        <Charts03/>
        <div style={{textAlign: 'left', color: 'rgb(6, 6, 43)'}}>
            <h2>Class Time</h2>
        </div>
        <ChartsCal/>
        </>
    )

}

export default Basic