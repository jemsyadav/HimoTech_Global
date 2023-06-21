import React from 'react'
import '../../src/Styles/Slider.css'
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import "swiper/css/pagination";
import group278 from '../Images/Group 278.png'
import line12 from '../Images/Line 12.png'
import group279 from '../Images/Group 279.png'
import group281 from '../Images/Group 281.png'
import group289 from '../Images/Group 289.png'
import group276 from '../Images/Group 276.png'

// import required modules
import { Keyboard, Scrollbar, Navigation, Pagination } from "swiper";
const slider = ({text,handleTextOpen,handleTextClose}) => {

  
  return (

    <div>
       <Swiper
        slidesPerView={1}
        centeredSlides={false}
        slidesPerGroupSkip={1}
        grabCursor={true}
        keyboard={{
          enabled: false,
        }}
        breakpoints={{
          1200: {
            slidesPerView: 4,
            slidesPerGroup: 1,
          },
          768: {
            slidesPerView: 2,
            slidesPerGroup: 1,
          },
          556: {
            slidesPerView: 1,
            slidesPerGroup: 1,
          },
        }}
        scrollbar={true}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[Keyboard, Scrollbar, Navigation, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
     <div className='hoverable_div'>
     <div className='main_div'>
       <div className="image1">
        <img className='group278' src={group278} alt="" />
        <div className="group278box">
        <h6>UI/UX Design</h6>
        <img src={line12} alt="" />
        <p>Lorem Ipsum is simply <br /> dummy text of the <br /> printing and typesetting</p>
           
      
        
        </div>
      
      </div>
      </div>
     

      <div className="ineer_box">
      <div className="InnerImage">
      <img className='innerImage1' src={group276} alt="" width={'100%'}/>
      <h6 className=''>UI/UX Design</h6> <br />

      
      <h6 className='Learn_More' onClick={handleTextOpen} style={{cursor:"pointer"}}>Learn  More</h6>
      {text && <p>Lorem Ipsum is simply<span onClick={handleTextClose} style={{cursor:"pointer",textDecoration:"underline",color:"red"}}>Learn  Less</span></p>}
  

</div>
      </div>
     </div>
      
        </SwiperSlide>
        <SwiperSlide>

        <div className='hoverable_div'>
        <div className='main_div'>
       <div className="image1">
        <img className='group278' src={group289} alt="" />
        <div className="group278box">
        <h6>Business Planning</h6>
        <img src={line12} alt="" />
        <p>Lorem Ipsum is simply <br /> dummy text of the <br /> printing and typesetting</p>
        </div>
      
      </div>
      </div>
      <div className="ineer_box">
      <div className="InnerImage">
      <img className='innerImage1' src={group276} alt="" width={'100%'}/>
      <h6 className=''>Business Planning</h6> <br />
      <h6 className='Learn_More'>Learn  More</h6>
  

</div>
      </div>
      </div>
        </SwiperSlide>
        <SwiperSlide>
        
        <div className='hoverable_div'>
        <div className='main_div'>
       <div className="image1">
        <img className='group278' src={group279} alt="" />
        <div className="group278box">
        <h6>Project Management</h6>
        <img src={line12} alt="" />
        <p>Lorem Ipsum is simply <br /> dummy text of the <br /> printing and typesetting</p>
        </div>
      
      </div>
      </div>
      <div className="ineer_box">
      <div className="InnerImage">
      <img className='innerImage1' src={group276} alt="" width={'100%'}/>
      <h6 className=''>Project Management</h6> <br />
      <h6 className='Learn_More'>Learn  More</h6>

</div>
      </div>
      </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='hoverable_div'>
        <div className='main_div'>
       <div className="image1">
        <img className='group278' src={group281} alt="" />
        <div className="group278box">
        <h6>Cyber Security</h6>
        <img src={line12} alt="" />
        <p>Lorem Ipsum is simply <br /> dummy text of the <br /> printing and typesetting</p>
        </div>
      
      </div>
      </div>
      <div className="ineer_box">
      <div className="InnerImage">
      <img className='innerImage1' src={group276} alt="" width={'100%'}/>
      <h6 className=''>Cyber Security</h6> <br />
      <h6 className='Learn_More'>Learn  More</h6>
  

</div>
      </div>
      </div>
        </SwiperSlide>
       
        <SwiperSlide>
        <div className='hoverable_div'>
        <div className='main_div'>
       <div className="image1">
        <img className='group278' src={group279} alt="" />
        <div className="group278box">
        <h6>UI/UX Design</h6>
        <img src={line12} alt="" />
        <p>Lorem Ipsum is simply <br /> dummy text of the <br /> printing and typesetting</p>
        </div>
      
      </div>
      </div>
      <div className="ineer_box">
      <div className="InnerImage">
      <img className='innerImage1' src={group276} alt="" width={'100%'}/>
      <h6 className=''>Business Planning</h6>  <br />
      <h6 className='Learn_More'>Learn  More</h6>
  

</div>
      </div>
      </div>
      
        </SwiperSlide>

        <SwiperSlide>
        <div className='hoverable_div'>
        <div className='main_div'>
       <div className="image1">
        <img className='group278' src={group279} alt="" />
        <div className="group278box">
        <h6>UI/UX Design</h6>
        <img src={line12} alt="" />
        <p>Lorem Ipsum is simply <br /> dummy text of the <br /> printing and typesetting</p>
        </div>
      
      </div>
      </div>
      <div className="ineer_box">
      <div className="InnerImage">
      <img className='innerImage1' src={group276} alt="" width={'100%'}/>
      <h6 className=''>Business Planning</h6> <br />
      <h6 className='Learn_More'>Learn  More</h6>
  

</div>
      </div>
      </div>
      
        </SwiperSlide>


        <SwiperSlide>
        <div className='hoverable_div'>
        <div className='main_div'>
       <div className="image1">
        <img className='group278' src={group279} alt="" />
        <div className="group278box">
        <h6>UI/UX Design</h6>
        <img src={line12} alt="" />
        <p>Lorem Ipsum is simply <br /> dummy text of the <br /> printing and typesetting</p>
        </div>
      
      </div>
      </div>
      <div className="ineer_box">
      <div className="InnerImage">
      <img className='innerImage1' src={group276} alt="" width={'100%'}/>
      <h6 className=''>Business Planning</h6> <br />
      <h6 className='Learn_More'>Learn  More</h6>
  

</div>
      </div>
      </div>
      
        </SwiperSlide>


        <SwiperSlide>
        <div className='hoverable_div'>
        <div className='main_div'>
       <div className="image1">
        <img className='group278' src={group279} alt="" />
        <div className="group278box">
        <h6>UI/UX Design</h6>
        <img src={line12} alt="" />
        <p>Lorem Ipsum is simply <br /> dummy text of the <br /> printing and typesetting</p>
        </div>
      
      </div>
      </div>
      <div className="ineer_box">
      <div className="InnerImage">
      <img className='innerImage1' src={group276} alt="" width={'100%'}/>  
       
      <h6 className=''>Business Planning</h6> <br />
      <h6 className='Learn_More'>Learn  More</h6>

  

</div>
      </div>
      </div>
      
        </SwiperSlide>
        
      </Swiper>
    
    </div>
  )
}

export default slider
