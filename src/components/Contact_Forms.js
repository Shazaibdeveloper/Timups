import React from 'react'
import contact from '../images/contact-img.jpg' 

const Contact_Forms = () => {
  return (
    <>
    <section className="contact_section layout_padding">
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <div className="form_container">
            <div className="heading_container">
              <h2>
                Contact Us
              </h2>
            </div>
            <form action="https://formspree.io/f/xyyanqep" method='POST'>
              <div>
                <input type="text" name='Ful Name' placeholder="Full Name " required autoComplete='off'/>
              </div>
              <div>
                <input type="email" name="email" placeholder="Email" required />
              </div>
              <div>
                <input type="number" name="phone" placeholder="Phone number" required/>
              </div>
              <div>
                <input type="text" name="message" className="message-box" placeholder="Message" required/>
              </div>
              <div className="d-flex ">
                <input type='submit' value= 'send' className='submit'/>
              </div>
            </form>
          </div>
        </div>
        <div className="col-md-6">
          <div className="img-box">
            <img src={contact} alt=""/>
          </div>
        </div>
      </div>
    </div>
  </section>
    </>
  )
}

export default Contact_Forms