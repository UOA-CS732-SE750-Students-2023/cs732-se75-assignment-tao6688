import React from "react";
import s from './style.module.css'
import Navbar from "../Navbar";
import Charts03Map from "../../charts/others/Charts03Map";

const Map = () => {
    return(
        <>
        <Navbar/>
        <div style={{textAlign: 'left', color: 'rgb(6, 6, 43)'}}>
            <h2>Student distribution</h2>
        </div>
        <Charts03Map/>
        </>
    )

}

export default Map