import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import BarChart from './charts/home/BarChart'
import Charts01 from './charts/home/Charts01'
import Navbar from './components/Navbar'
import LineChart from './charts/home/LineChart'
import BoxChart from './charts/home/BoxChart'
import NigChart from './charts/home/NigChart'
import Selected from './components/Selected'

function App() {
  
  return (
    <>
      <Navbar/>
      <Selected/>
      <div style={{textAlign: 'left', color: 'rgb(6, 6, 43)'}}>
        <h2>Review</h2>
      </div>
      <LineChart />
      <BoxChart />

      <Charts01/>
      <div style={{textAlign: 'left', color: 'rgb(6, 6, 43)'}}>
        <h2>Feedback</h2>
      </div>
      <NigChart/>
      <BarChart/>
    </>
  )
}

export default App
