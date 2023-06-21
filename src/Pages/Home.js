import React, { useState } from 'react'
import '../../src/Styles/Home.css'
import Slider from '../Components/Slider'
import Studies from '../Components/Studies'
import join from '../Images/joinover.png'
import moonland from '../Images/Vector (1).png'
import Zethan from '../Images/zethan (2).f0abdad123b9972e6994 (1).png'
import betterphyshology from '../Images/logo (2).png'
import uiux from '../Images/uiux.png'
import Navbar1 from '../Components/Header'
import businessconsulation from '../Images/Icon material-business.png'
import websitedevlopment from '../Images/Icon material-web.png'
import support from '../Images/Icon simple-staticman.png'
import market from '../Images/Icon map-search.png'
import playimage from '../Images/playImage.png'
import group172 from '../Images/Group 172.png'
import group173 from '../Images/Group 173.png'
import group166 from '../Images/Group 166.png'
import WhyWeChoose from '../Components/WhyWeChoose'
import SoftwareSolution from '../Components/SoftwareSolution'
import Footer1 from '../Components/Footer1'
import Counter from '../Components/Counter'


const Home = () => {
const [text,setText]=useState(false)
const handleTextOpen=()=>{
  setText(true)
}
const handleTextClose=()=>{
  setText(false)
}


  return (
    
    <div>
    
   <Navbar1/>
  
      <div className=" Home_Background container-fluid">
      <div className="container">
        <div className="col-md-2">

        </div>
        <div className="Home_text_body">
        <div className="col-md-6">
           
            <h5 className='Home_Heading'>We are IT service agence</h5>
            <h1 className='Heading'>Think Big. We make <br />IT, possible!</h1>
            <p className='text-white'>We place you at the center international networks to <br />advance your strategic interests.</p>
            <button className="glow-on-hover" type="button">Contact Us</button>
            </div>
        </div>
      </div>
 
      </div>
    
      


     
    <div className="Backgroun2">
    <div className=" Home_Page_Logo container">
        <div className="row">
            <div className="col-md-4 col-sm-12">
            <img className='Home_Project_Logo' src={join} alt=""  width={'100%'}/>
                
            </div>
            <div className="col-md-3 col-sm-12">
            <img className='Home_Project_Logo' src={moonland} alt="" width={'110rem'}  />
                
            </div>
            <div className="col-md-2 col-sm-12">
            <img className='Home_Project_Logo' src={Zethan} alt=""  width={'40rem'}  />
                
            </div>
            <div className="col-md-3 col-sm-12">
            <img className='Home_Project_Logo' src={betterphyshology} alt="" width={'170rem'} />
                
            </div>
        </div>

        <div className="All_Services">
            <div className="Ui_Ux">
             <img src={uiux} alt="" />
             <p>Business <br /> Consulation</p>
            </div>
            <div className="Ui_Ux">
             <img src={businessconsulation} alt="" />
             <p>Business <br /> Consulation</p>
            </div>
            <div className="Ui_Ux">
             <img src={websitedevlopment} alt="" />
             <p>Business <br /> Consulation</p>
            </div>
            <div className="Ui_Ux">
             <img src={support} alt="" />
             <p>Business <br /> Consulation</p>
            </div>
            <div className="Ui_Ux">
             <img src={market} alt="" />
             <p>Business <br /> Consulation</p>
            </div>
            
            
         </div>
    </div>

    </div>
    <div className="About_Our_Company">
   <div className=" the_best_it_service_company container">
    <div className="row">
      <div className="col-md-1">

      </div>
      <div className="col-md-4">
   <img src={playimage} alt="" width={'100%'}/>
      </div>
      <div className="col-md-2">

      </div>
      <div className="col-md-4">
      <h6 className='Second_Heading'>About Our Company</h6>
   <br /> <br />
      <h3 className='About_Company_Heading'>Choose <span className='the_best_it'> The Best IT  </span> <br />Service Company</h3>  <br />
      <p>Lorem Ipsum is simply dummy text of the printing
 <br /> and typesetting industry. Lorem Ipsum has been <br />
the industry's ever since the 1500s,</p>  <br />
<hr className='line' />
   
<div className="MoneyAndTechinacal">
<div className="MoneyBackSpace">
    <img src={group172} alt="" />
  </div>
  <div className="moneyback">
    <h6>Moneyback <br /> Gurantee</h6>

    
  </div>
  <div className="MoneyAndTechinacal">
<div className="MoneyBackSpace">
    <img src={group173} alt="" />
  </div>
  <div className="moneyback">
    <h6>Technical<br /> Support</h6>

   
  </div>
 
  </div>

  </div>
  <hr className='line' />
  <br />
<div className="call_Services">
 <div className="button_Call">
 <button className="glow-on-hover" type="button">Contact Us</button>
  </div>
  <div className="imagecall_logo">
    <img src={group166} alt="" width={'80%'}/>
  </div>
  <div className="callforhelp">
    <h6>Call For Help</h6>
    <p>9100000000</p>
  </div>
  </div>
   
  </div> 
 
 </div>
    </div>
   </div>
 

   <div className="slider1">
  <div className="our_awesome_services">
   <h5 className='Services_Heading'>Our Awesome Services</h5> <br /> <br />
   <h1>We Are <span className='DECIATED_SPAN'> Dedicated </span> To <br />Serve You All Time.</h1> <br /> <br />
   <Slider text={text} handleTextOpen={handleTextOpen} handleTextClose={handleTextClose}/>
  
   </div>

  </div>

  <Studies/>

  <WhyWeChoose/>


  <SoftwareSolution/>
  <Footer1/>
 


 
  
    </div>
    
   
  )
}

export default Home
