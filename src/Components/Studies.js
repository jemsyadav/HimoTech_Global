import React from 'react'
import '../../src/Styles/Studies.css'
import studies1  from '../Images/studies1 (1).png'
import studies2  from '../Images/studiesz (2).png'
import studies3  from '../Images/studies1 (1).png'
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Keyboard, Scrollbar, Navigation, Pagination } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import "swiper/css/pagination";
const Studies = () => {
  return (
    <div>
    <div className="Studies_Box">
    <div className="container">
    <div className="row">
        <div className="col-md-4">
        <h5 className='Studies_Heading'>Our Case Studies</h5>  <br /><br />
   <h6>Technology Is <span className='Span_Transforming'>Transforming </span>  <br />Every Industry Sector</h6>  <br />
        </div>
    </div>
   
   </div>
  
 
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
        className="mySwiper">


<SwiperSlide><img className='Images' src={studies2} alt=""  width={'100%'} />

</SwiperSlide>

        <SwiperSlide>
      
        <img  className='Images' src={studies1} alt=""  width={'100%'} />
        {/* <div class="card-body">
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    </div> */}
  
        </SwiperSlide>
     
        <SwiperSlide><img  className='Images' src={studies3} alt=""  width={'100%'} /></SwiperSlide>
        <SwiperSlide><img className='Images' src={studies2} alt=""  width={'100%'} /></SwiperSlide>
        <SwiperSlide><img className='Images' src={studies2} alt=""  width={'100%'} /></SwiperSlide>
        <SwiperSlide><img className='Images' src={studies2} alt=""  width={'100%'} /></SwiperSlide>
        <SwiperSlide><img className='Images' src={studies2} alt=""  width={'100%'} /></SwiperSlide>
        <SwiperSlide><img className='Images' src={studies2} alt=""  width={'100%'} /></SwiperSlide>
        <SwiperSlide><img className='Images' src={studies2} alt=""  width={'100%'} /></SwiperSlide>

      </Swiper>


    </div>
    </div>
  )
}

export default Studies
