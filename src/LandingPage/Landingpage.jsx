import React from 'react'
import Home from '../Components/Home/Home'
import Card from '../Components/Card/Card'
import AddyourOwn from '../Components/Card/AddyourOwn'
import Testimonial from '../Components/Testimonial/Testimonial'
import End from '../Components/End/End'
import Footers from '../Components/Footer/Footers'

const Landingpage = () => {
  return (
    <div>
        <Home/>
        <Card/>
        <AddyourOwn/>
        <Testimonial/>
        <End/>
        <Footers/>
    </div>
  )
}

export default Landingpage