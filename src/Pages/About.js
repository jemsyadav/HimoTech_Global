import React from 'react'
import '../../src/Styles/About.css'
import circle from '../Images/circle.png'
import first from '../Images/customer_icon.png'
import second from '../Images/Second_icon.png'
import third from '../Images/third_icon.png'
import fourth from '../Images/fourth_icon.png'

import Navbar1 from '../Components/Header'
import Footer1 from '../Components/Footer1'
const About = () => {
  return (
    <div>
  <Navbar1/>
     <div className="container">

        <div className="row">
            <div className="col md-12">
           <div className="heading">
            <h2 class="Heading_1">Fingent's Four Pillars of Influence</h2>
            <div class="Heading_1"> <p>“We believe in these four pillars of influence that drive our growth. This is ingrained in <br /> everything we do, right from our hiring practices to our work culture."</p></div>
            </div>
            </div>
            </div>

             <div className="row">
            <div className="col-md-4">
            <h2 class="elementor">Three guiding principles for Organization</h2>
            <ul>
             <li>Impact the world</li>
             <li>Great workplace</li>
            <li>Sustainable business model</li>
           </ul>
            </div>
            <div className="col-md-4">
           <img src={circle} alt=""  width={'100%'}/>
            </div>
            <div className="col-md-4">
            <h2 class="elementor">Three guiding principles for Organization</h2>
            <ul>
             <li>Character</li>
             <li>Personality</li>
            <li>SkillSet</li>
           </ul>
            </div>
        </div>
        <div className="customers">
        <div className="row">
            <div className="col-md-3">
            <img className='icons ' src={first} alt="" />
            <h3>Customers</h3>
            <p >We develop relationships that make a positive difference in our customers' lives.</p>
            </div>
            <div className="col-md-3">
          
            <img className='icons ' src={second} alt="" />
            <h3>Peers</h3>
            <p >We value our people, encourage their development, and reward their performance.</p>
            </div>
            <div className="col-md-3">
           
            <img className='icons ' src={third} alt="" />
            <h3>Family & Self</h3>
            <p >We personally care for the well-being and work-life balance of our associates and their families.</p>
            </div>
            <div className="col-md-3">
            <img className='icons ' src={fourth} alt="" />
            <h3>Society</h3>
            <p >We take key initiatives that benefit the needy and foster a culture of giving back to society.</p>
            </div>
            </div>
        </div>
        </div>
        <Footer1/>
     </div>
     
   
  )
}

export default About
