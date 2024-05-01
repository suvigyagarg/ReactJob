import React from 'react'
import Hero from '../components/hero.jsx';
import Homecards from '../components/homecards.jsx';
import Jobslisting from '../components/jobslisting.jsx';
import Viewalljobs from '../components/viewalljobs.jsx';


function homepage() {
  return (
    <div>
        <Hero/>
        <Homecards/>
        <Jobslisting isHome ={true}/>
        <Viewalljobs/>
    </div>
  )
}

export default homepage