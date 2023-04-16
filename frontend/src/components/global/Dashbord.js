import React from 'react'
import Navbar from './navbar/Navbar';
import Sidebar from './sidebar/sidbar';
import "./Dashbord.scss"
import Featuredd from './featuredd/Featured';
export default function 
() {
  return (
    <div className=' home'>
        <Sidebar/>
        <div className='homeContainer'>
          <Navbar/>
          
          <div className="charts">
          <Featuredd/>
        </div>
        </div>
    </div>
  )
}
