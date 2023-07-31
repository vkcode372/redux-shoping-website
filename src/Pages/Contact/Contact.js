import React from 'react'
import "./contact.css"
const Contact = () => {
  return (
    <section className='contact-page'>
    <div className='contact-section'>

    
    <div className="section-header">
      <div className="contact-container">
        <h2>Contact Us</h2>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
      </div>
    </div>
    
    <div className="contact-container">
      <div className="row">
        
        <div className="contact-info">
          <div className="contact-info-item">
            <div className="contact-info-icon">
              <i className="fas fa-home"></i>
            </div>
            
            <div className="contact-info-content">
              <h4 className='text-start'>Address</h4>
              <p> Owatonna, Minnesota,55060</p>
            </div>
          </div>
          
          <div className="contact-info-item">
            <div className="contact-info-icon">
              <i className="fas fa-phone"></i>
            </div>
            
            <div className="contact-info-content">
              <h4 className='text-start' >Phone</h4>
              <p>8354059XXX</p>
            </div>
          </div>
          
          <div className="contact-info-item">
            <div className="contact-info-icon">
              <i className="fas fa-envelope"></i>
            </div>
            
            <div className="contact-info-content">
              <h4 className='text-start'>Email</h4>
             <p>vkcodeblock@gmail.com</p>
            </div>
          </div>
        </div>
        
        <div className="contact-form">
          <form action="" id="contact-form">
            <h2>Send Message</h2>
            <div className="input-box">
              <input type="text" required="true" name=""></input>
              <span>Full Name</span>
            </div>
            
            <div className="input-box">
              <input type="email" required="true" name=""></input>
              <span>Email</span>
            </div>
            
            <div className="input-box">
              <textarea required="true" name=""></textarea>
              <span>Type your Message...</span>
            </div>
            
            <div className="input-box">
              <input type="button" value="Send" name=""></input>
            </div>
          </form>
        </div>
        
      </div>
    </div>
    </div>
  </section>
  )
}

export default Contact