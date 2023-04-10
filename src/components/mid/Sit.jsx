import React from "react";

import Navbar from "../Navbar";
import ChartsNow from "../../charts/sit/ChartsNow";
import ChartsNum from "../../charts/sit/ChartsNum";

const Sit = () => {
    return(
        <>
        <Navbar/>
        <div style={{textAlign: 'left', color: 'rgb(6, 6, 43)'}}>
            <h2>Existing grades for you</h2>
        </div>
        <ChartsNow/>
        <div style={{textAlign: 'left', color: 'rgb(6, 6, 43)'}}>
            <h2>Submission situation</h2>
        </div>
        <ChartsNum/>
        </>
    )

}

export default Sit