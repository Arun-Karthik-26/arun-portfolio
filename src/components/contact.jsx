import React, { useState } from 'react';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons'; 
import { faPhoneAlt, faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'; 

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    alert('Form submitted!');
  };

  return (
    <div>
      <div className="contact-container" id='contact'>
      <div className="contact-content">
        <div className="contact-heading">
            <h1>Let's work together!</h1>
            <p>The best way to predict the future is to create it!</p>
        </div>
        <form onSubmit={handleSubmit} className="contact-form">
          <input 
            type="text" 
            name="name" 
            placeholder="Your Name" 
            value={formData.name} 
            onChange={handleChange} 
            required 
          />
          <input 
            type="email" 
            name="email" 
            placeholder="Your Email" 
            value={formData.email} 
            onChange={handleChange} 
            required 
          />
          <textarea 
            name="message" 
            placeholder="Your Message" 
            value={formData.message} 
            onChange={handleChange} 
            required 
          />
          <button type="submit">Send Message</button>
        </form>
      </div>
      <div className="contact-details">
        <div className="sec">
          <FontAwesomeIcon icon={faPhoneAlt} className='fa'/>
          <div>
            <h2>Phone</h2>
            <a href="tel:9629834626">+91-9629834626</a>
          </div>
        </div>
        <div className="sec">
          <FontAwesomeIcon icon={faEnvelope} className='fa'/>
          <div>
            <h2>Email</h2>
            <a href="mailto:arun261104@gmail.com">arun261104@gmail.com</a>
          </div>
        </div>
        <div className="sec">
          <FontAwesomeIcon icon={faMapMarkerAlt} className='fa'/>
          <div>
            <h2>Address</h2>
            <p>267, Nayakkar Street,</p>
            <p>Mappilai Nayakkan Patti,</p>
            <p>Thanjavur-613408</p>
          </div>
        </div>
        <div className="contact-social">
          <a href="https://www.facebook.com/arun.karthik.39948" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faFacebookF} />
          </a>
          <a href="https://www.linkedin.com/in/arun-karthik-s-b1a391259/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedinIn} />
          </a>
          <a href="https://github.com/Arun-Karthik-26" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </div>
      </div>
      </div>
      <div className='footer'>
        <h1>Designed and Developed by <span>Arun Karthik</span></h1>
      </div>
    </div>
  );
}

export default Contact;
