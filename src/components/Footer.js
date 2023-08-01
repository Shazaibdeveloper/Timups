import React from 'react'
import { FaFacebookF,FaLinkedinIn } from 'react-icons/fa';
import { BsTwitter,BsTelephoneFill } from 'react-icons/bs';
import { FiInstagram } from 'react-icons/fi';
import {MdEmail,MdLocationOn } from 'react-icons/md';

const Footer = () => {
  return (
     <>
      <footer className="footer_section">
    <div className="container">
      <div className="row">
        <div className="col-md-6 col-lg-3 footer-col">
          <div className="footer_detail">
            <h4>
              About
            </h4>
            <p>
              Necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with
            </p>
            <div className="footer_social">
              <a href="https://www.facebook.com/MuhammadShahzaib69">
                <i className="fa fa-facebook" aria-hidden="true"><FaFacebookF /></i>
              </a>
              
              <a href="https://www.linkedin.com/in/muhammadshahzaibwebdeveloper/">
                <i className="fa fa-linkedin" aria-hidden="true"><FaLinkedinIn /></i>
              </a>
              <a href="https://www.instagram.com/shahzaib_coder/">
                <i className="fa fa-instagram" aria-hidden="true"><FiInstagram /></i>
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-3 footer-col">
          <div className="footer_contact">
            <h4>
              Reach at..
            </h4>
            <div className="contact_link_box">
              <a href="https://www.instagram.com/shahzaib_coder/">
                <i className="fa fa-map-marker" aria-hidden="true"><MdLocationOn /></i>
                <span>
                  Location
                </span>
              </a>
              <a href="">
                <i className="fa fa-phone" aria-hidden="true"><BsTelephoneFill /></i>
                <span>
                  Call +92 317 5188580
                </span>
              </a>
              <a href="">
                <i className="fa fa-envelope" aria-hidden="true"><MdEmail /></i>
                <span>
                  shahzaibmuhammad627
                </span>
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-3 footer-col">
          <div className="footer_contact">
            <h4>
              Subscribe
            </h4>
            <form action="#">
              <input type="text" placeholder="Enter email" />
              <button type="submit">
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <div className="col-md-6 col-lg-3 footer-col">
          <div className="map_container">
            <div className="map">
              <div id="googleMap">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6647.62393433013!2d73.03068529132769!3d33.58423104334677!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38df93815f68da6b%3A0xfd35bb67004ee5ed!2sTench%20Bhata%20Rawalpindi%2C%20Punjab%2046000%2C%20Pakistan!5e0!3m2!1sen!2s!4v1681562176080!5m2!1sen!2s" style={{width:"600" , height: "450", border: 0 , allowfullscreen:"", loading:"lazy", referrerpolicy:"no-referrer-when-downgrade" }}     ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-info">
        <p>
          &copy; <span id="displayYear"></span> All Rights Reserved By
          <a href="!#">  M.SHAHZAIB</a>
        </p>
      </div>
    </div>
  </footer> 
     </>
  )
}

export default Footer