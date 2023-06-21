import React from 'react'
import '../../src/Styles/WhyWeChooose.css'
import imagewhyiam from '../Images/whyimg.svg'

const WhyWeChoose = () => {
  return (
    <div>

    <div className="whychooseus">

      <div className="container">
        <div className="row">
        <div className="col-md-12">

        <div className="whychooseus_Heading">
        <h5 class="WhyChooseUsBUtton">Why choose Us ?</h5>
      <h6>We Serve A Wide <span class="Span_Transforming">Variety</span>  <br/>Of Industry </h6>
      <p>Lorem Ipsum is simply dummy text of the <br />printing and typesetting industry. </p>
        </div>
        </div>
            <div className="col-md--1">

            </div>
            <div className="col-md-6">
            <img src={imagewhyiam} alt="" width={'100%'} />
            </div>

            <div className="col-md-5">
            <div className="whychoose_aboutus">
            <p>Touching Lives Through Technology</p>
        <h6>Fingent's Four Pillars <br />Of Influence</h6>
        <p>Lorem Ipsum is simply dummy text of the printing
and typesetting industry. Lorem Ipsum has been
the industry's ever since the 1500s,</p>
<button class="glow-on-hover" type="button">About Us</button>
</div>

            </div>
            <div className="col-md-1">

            </div>
            
        </div>
      </div>
      </div>
    </div>
  )
}

export default WhyWeChoose
