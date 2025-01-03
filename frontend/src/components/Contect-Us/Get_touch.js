import React from 'react'
import './Get-touch.css'
import emailjs from 'emailjs-com';
import { useState } from 'react';

const Get_touch = () => {
  // const [formData, setFormData] = useState({
  //   name: '',
  //   email: '',
  //   phone: '',
  //   message: ''
  // });

  // const handleChange = (e) => {
  //   const { id, value } = e.target;
  //   setFormData({
  //     ...formData,
  //     [id]: value
  //   });
  // };

  // const handleSubmit = () => {
  //   // e.preventDefault();

  //   emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', e.target, 'YOUR_USER_ID')
  //     .then((result) => {
  //       console.log(result.text);
  //       alert('Your message has been sent!');
  //       setFormData({
  //         name: '',
  //         email: '',
  //         phone: '',
  //         message: ''
  //       });
  //     }, (error) => {
  //       console.log(error.text);
  //       alert('Oops! Something went wrong.');
  //     });
  //  };

  return (
    <div>
       <div className='contact-form-container'>
       <h2>GET IN TOUCH</h2>
      <form >
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            // value={formData.name}
            // onChange={handleChange}
            required
          />
        </div>
        <div className="details">
          <div className="form-group">
            <label htmlFor="name">Company Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              // value={formData.name}
              // onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
          <label htmlFor="name">Phone/Mobile:</label>
          <input
            type="number"
            id="name"
            name="name"
            // value={formData.name}
            // onChange={handleChange}
            required
          />
          </div>

        </div>
      
       
        <div className="form-group">
          <label htmlFor="message">Address:</label>
          <textarea
            id="message"
            name="message"
            // value={formData.message}
            // onChange={handleChange}
            required
          />
        </div>
        <div className='details'>
          <div className="form-group">
            <label htmlFor="name">Country:</label>
            <input
              type="text"
              id="name"
              name="name"
              // value={formData.name}
              // onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              // value={formData.email}
              // onChange={handleChange}
              required
            />
          </div>

        </div>
        
        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            // value={formData.message}
            // onChange={handleChange}
            required
          />
        </div>
     
        
        <div className="form-btn">
          <button type="submit" className="send-btn">SEND ENQUIRY</button>
        </div>
      </form>
      
    </div>
    <div className='back_image'>

    </div>
    </div>
   
  )
}

export default Get_touch;