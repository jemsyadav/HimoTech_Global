import React from 'react'
import '../../src/Styles/SoftwareSolution.css'
import developer from '../Images/Developer.png'


const SoftwareSolution = () => {
  return (
    <div>
<div className="container">
  <div className="row">
    <div className="Background_ImageSoftware  col-md-12">
    <h4 className='Solution_Business text-center text-white'>We develop strategic software solutions for businesses.</h4> <br /> <br />
      <div className="Years_of_All">
    <div className="row">
  
      <div className="col-md-3"> <br /> <br />
        <h1>2003</h1> 
        <h5>Year of <br />establishment</h5>
      </div>
      <div className="col-md-3"> <br /> <br />
      <h1>2,5K+</h1>
      <h5>Of customers <br />worldwide</h5>
      </div>
      <div className="col-md-3"> <br /> <br />
      <h1>14+</h1>
      <h5>Countries with active <br />client base</h5>
      </div>
      <div className="col-md-3"> <br /> <br />
      <h1>4.9/5</h1>
      <h5>Customer <br />rating</h5>
      </div>
      </div>
      <div className="col-md-12"> <br /> <br />
        <h4>You have better things to do than worry about IT for your small business. Let's Discuss about Project.</h4>
      </div>
    </div>
      
    </div>
  </div>
</div>



    <div className=" CustomerReview container-fluid">
    <div className="container">
      <div className="row">
        <div className="col-md-1">
</div>
 <div className="col-md-4">
 <h4 className='Testimonial'>Testimonial</h4>
<h3>Here's what our
Customer have said.</h3>
<p>Lorem Ipsum is simply dummy text of the printing
and typesetting industry. Lorem Ipsum has been
the industry's ever since the 1500s,</p>

<button className="glow-on-hover" type="button">Contact Us</button>
</div>
<div className="col-md-6">

<div id="carouselExampleControls" class="carousel_slide" data-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img class="d-block w-100" src={developer} alt="First slide"/>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src={developer} alt="Second slide"/>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src={developer} alt="Third slide"/>
    </div>
  </div>
  {/* <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a> */}
</div>
</div>
        </div>
      </div>
    </div>
 
    </div>
  )
}

export default SoftwareSolution
