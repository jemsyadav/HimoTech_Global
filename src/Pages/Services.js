import React from 'react'
import Counter from '../Components/Counter'
import Navbar1 from '../Components/Header'
import Footer1 from '../Components/Footer1'
import '../Styles/Services.css'

const Services = () => {
  return (
    <div>

    <Navbar1/>
    <div className="counter">
      <Counter/>
      </div>
      <Footer1/>
    </div>
  )
}

export default Services
