import React from 'react'
import '../../src/Styles/Header1.css'
import mail from '../Images/Icon feather-mail.png'
import clock from '../Images/clock.png'
import twitter from '../Images/twitter.png'
import linkdin from '../Images/linkdin.png'
import instagram from '../Images/instagram.png'

const Header1 = () => {
  return (
    <div>
       <div className=" First_Navbar container-fluid">
       <div className="mail">
        <img className='p-2' src={mail} alt="" />
        <a href="">infohimotechglobal.com</a>
       </div>

       <div className="mail">
        <img className='p-2' src={clock} alt="" />
        <a href=""> Mon-Sat (9:30am - 6:30pm)</a>
       </div>


       <div className="Socisl_logo">
       
      <a className='p-2' href=""> <img src={twitter} alt="" /></a>
      <a className='p-2' href="https://www.linkedin.com/company/himotech-global-pvt-ltd/"><img src={linkdin} alt="" /></a>
      <a className='p-2' href=""> <img src={instagram} alt="" /></a>

      
       </div>

       
      
     </div>
      </div>
  )
}

export default Header1
