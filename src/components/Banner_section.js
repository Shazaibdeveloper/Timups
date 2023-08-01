import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import slider from '../images/slider-img.png' 
import {  Link } from "react-router-dom";

const Banner_section = () => {
  return (
     <>
      <section className="slider_section banner-section"> 
        <div className="inner">
          <Carousel autoPlay infiniteLoop={true}>
          <div className="box active">
            <div className="container-fluid ">
              <div className="row justify-content-center">
 
                <div className="col-md-5 text-left">
                  <div className="detail-box">
                    <h1>
                      Smart Watches
                    </h1>
                    <p>
                      Aenean scelerisque felis ut orci condimentum laoreet. Integer nisi nisl, convallis et augue sit amet, lobortis semper quam.
                    </p>
                    <div className="btn-box">
                      <Link to="/contact" className="btn1">
                        Contact Us
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-md-5">
                  <div className="img-box">
                    <img src={slider} alt="" />
                  </div>
                </div>

              </div>
            </div>
          </div>
          <div className="box active">
            <div className="container-fluid ">
              <div className="row justify-content-center">
                <div className="col-md-5 text-left">
                  <div className="detail-box">
                    <h1>
                      Global Watch
                    </h1>
                    <p>
                      Aenean scelerisque felis ut orci condimentum laoreet. Integer nisi nisl, convallis et augue sit amet, lobortis semper quam.
                    </p>
                    <div className="btn-box">
                      <Link to="/contact" className="btn1">
                        Contact Us
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-md-5">
                  <div className="img-box">
                    <img src={slider} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="box active">
            <div className="container-fluid ">
              <div className="row justify-content-center">
                <div className="col-md-5 text-left">
                  <div className="detail-box">
                    <h1>
                      International Watches
                    </h1>
                    <p>
                      Aenean scelerisque felis ut orci condimentum laoreet. Integer nisi nisl, convallis et augue sit amet, lobortis semper quam.
                    </p>
                    <div className="btn-box">
                      <a href="" className="btn1">
                        Contact Us
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-md-5">
                  <div className="img-box">
                    <img src={slider} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          </Carousel>
        </div>
         

    </section> 
     </>
  )
}

export default Banner_section