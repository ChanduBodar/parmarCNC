import React, { useRef } from 'react'
import './Get-touch.css'
// import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';


const Get_touch = () => {

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "a47bdd0f-f1a9-4b92-a4f1-a798a8ea23a3");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      Swal.fire({
        title: "Success!",
        text: "Message send successful!",
        icon: "success"
      });
    }
  }

  return (
    <div>
      <div className='contact-form-container'>
        <h2>GET IN TOUCH</h2>

        <form onSubmit={onSubmit} className='my_form' >
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"

              required
            />
          </div>
          <div className="details">
            <div className="form-group">
              <label htmlFor="name">Company Name:</label>
              <input
                type="text"
                id="company"
                name="company"

                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="name">Phone/Mobile:</label>
              <input
                type="tel"
                id="mobile"
                name="mobile"
                inputmode="numeric"


                required
              />
            </div>

          </div>

          <div className="form-group" id='message_area'>
            <label htmlFor="message">Address:</label>
            <textarea
              id="address"
              name="Address"

              required
            />
          </div>
          <div className='details'>
            <div className="form-group">
              <label htmlFor="name">Country:</label>
              <input
                type="text"
                id="name"
                name="country"

                required
              />
            </div>
            <div className="form-group" >
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"

                required
              />
            </div>

          </div>

          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              name="message"

              required
            />
          </div>


          
            <button type="submit" value="Send" className="send-btn">SEND ENQUIRY</button>
        
        </form>

      </div>
      <div className='map_image'>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3697.503801952203!2d70.7902961747132!3d22.068568779853877!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395837be8edb9ac9%3A0x9758ceac625e874b!2sPARMAR%20CNC%20MACHINES%20(INDIA)%20LLP%2C%20CNC%20Press%20Brake%20Machine%20Manufacturers%20in%20Rajkot%2C%20Gujarat%2CIndia%20Press%20Brake%20Machine%20in%20Rajkot!5e0!3m2!1sen!2sin!4v1736936848593!5m2!1sen!2sin" width="600" height="450"  allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </div>

  )
}

export default Get_touch;