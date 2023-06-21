import React from 'react'
import '../../src/Styles/Footer1.css'
import himotechlogo from '../Images/HeaderLogo.png'
import mapicon from '../Images/Icon material-location-on.png'
import image1 from  '../Images/image1.png'
import image2 from  '../Images/image2.png'
import image3 from  '../Images/image3.png'
import image4 from  '../Images/image4.png'
import image5 from  '../Images/image5.png'
import image6 from  '../Images/image6.png'


const Footer1 = () => {
  return (
    <div>
    <div className="container-fluid Header_1">
        <div className="container">
        <div className="row">
            

            <div className="col-md-6  Header_1Paragraph"  >
            <h5>Looking for the Best IT Business Solutions?</h5>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
Lorem Ipsum has beenthe industry's ever since the 1500s,</p>
            </div>
            <div className="col-md-3">

            </div>
            <div className="col md-3">
            <div className="Get_A_Quote">
           <button class="glow-on-hover"  type="button "> <link rel="stylesheet" href="https://www.google.com/maps/dir/28.5758384,77.320955//@28.5758204,77.2509147,12z/data=!4m4!4m3!1m1!4e1!1m0?entry=ttu" />Get Direction</button>
            </div>
            </div>
        </div>

        </div>

      
       
    </div>
    <div className="Background_Image">
    <div className="container">
      <div className="row">
        <div className="col-md-2">
        <div className="Part1">
        <div className="logo">
          <img src={himotechlogo} alt="" /> 
          </div>
          <p>Lorem Ipsum is simply
dummy text of the printing
and typesetting</p> 
<button class="glow-on-hover" type="button">About Us</button>
</div>
        </div>
        <div className="col-md-3">
        <div className="NewSelleter">
          <h6>Newsletter</h6> 
          <hr className='HrTag' /> 
      
          <p>Lorem Ipsum is simply <br />dummy text of.</p>  <br /> 
          <form action="/action_page.php">

  <input className='Email_Address' type="email" id="email" placeholder='Your Email Address' name="email"/>
  <input type="submit"/>
</form>
 </div>


        </div>
        
        <div className="col-md-3 col-sm-12 col-xs-12">
        <div className="OfficialInfo">
          <h6>Official Info:</h6>
          <hr className='HrTag' /> 
        <img src={mapicon} alt="" /> 
        <p>B-01, 84, Block D, <br />Sector 2, Noida, <br />UP 201301</p>
        <h6>Open Hours:</h6>
        Mon - Sat <br />09:30am - 06:30pm
        </div>  
        </div>
        <div className="col-md-4">
        <div className='img_section'>
        <div className="Gallery">
        <h6>Gallery</h6>
        <hr className='HrTag' /> 
       <img src={image1} alt="" /> 
          <img src={image2} alt="" />
          <img src={image3} alt="" />
          <img src={image4} alt="" />
          <img src={image5} alt="" />
          <img src={image6} alt="" />
          
          </div>
    
      
          
       </div>
        </div>

     
      </div>
      <hr />
      <div className="hmt">
        <h6 className='text-center'>© 2023 HMT – All rights reserved.</h6>
      </div>
    </div>
    
    </div>
    
    
    
    </div>
  )
}

export default Footer1
