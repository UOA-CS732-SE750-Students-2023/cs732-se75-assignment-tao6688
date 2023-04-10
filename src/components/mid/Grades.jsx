import React from "react";

import Navbar from "../Navbar";
import ChartsGra from "../../charts/grades/ChartsGra";

const Grades = () => {
    return(
        <>
        <Navbar/>
        <div style={{textAlign: 'left', color: 'rgb(6, 6, 43)'}}>
            <h2>Previous grades combination</h2>
        </div>
        <ChartsGra/>
        </>
    )

}

export default Grades