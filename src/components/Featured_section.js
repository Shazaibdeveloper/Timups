import React from 'react'  
import { BsArrowRight } from 'react-icons/bs';

import f1 from '../images/f1.png' 
import f2 from '../images/f2.png' 
import f3 from '../images/f3.png' 
import f4 from '../images/f4.png'   
import { useState } from 'react'

const featureapi = [
    {
     f1 : f1,
     head : "Fitness Tracking",
     para : "Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
     btn : "Read More",
     arrow : <BsArrowRight />
    },
    {
        f1 : f2,
        head : "Alerts & Notifications",
        para : "Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        btn : "Read More",
        arrow : <BsArrowRight />
       },
       {
        f1 : f3,
        head : "Messages",
        para : "Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        btn : "Read More",
        arrow : <BsArrowRight />
       },
       {
        f1 : f4,
        head : "Bluetooth",
        para : "Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        btn : "Read More",
        arrow : <BsArrowRight />
       },
]

const Featured_section = () => {

  const [feature,setfeature] = useState(featureapi)

  return (
     <>
       <section className="feature_section layout_padding">
    <div className="container">
      <div className="heading_container">
        <h2>
          Features Of Our Watches
        </h2>
        <p>
          Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
      <div className="row">

   {
    feature.map((p) =>{

        const {f1,head,para,btn,arrow} = p;

        return(
            <>
             <div className="col-sm-6 col-lg-3">
          <div className="box">
            <div className="img-box">
              <img src={f1} alt="" />
            </div>
            <div className="detail-box">
              <h5>
                {head}
              </h5>
              <p>
               {para}
              </p>
              <a href="https://www.instagram.com/shahzaib_coder/">
                <span>
                {btn}
                </span>
                <i className="fa fa-long-arrow-right" aria-hidden="true">{arrow}</i>
              </a>
            </div>
          </div>
        </div>
            </>
        )
    })
   }

       
       

      </div>
      <div className="btn-box">
        <a href="https://www.instagram.com/shahzaib_coder/">
          View More
        </a>
      </div>
    </div>
  </section>
     </>
  )
}

export default Featured_section