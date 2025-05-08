import React from 'react';
import './contect_us.css'
import Swal from 'sweetalert2';

const GetTouch = ({ getInTouchData }) => {
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
  };

  return (
    <div>
      <div className="contact-form-container">
        <h2>{getInTouchData.title}</h2>

        <form onSubmit={onSubmit} className="my_form">
          <div className="form-group">
            <label htmlFor="name">{getInTouchData.fields.name}:</label>
            <input
              type="text"
              id="name"
              name="name"
              required
            />
          </div>

          <div className="details">
            <div className="form-group">
              <label htmlFor="company">{getInTouchData.fields.companyName}:</label>
              <input
                type="text"
                id="company"
                name="company"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="mobile">{getInTouchData.fields.phone}:</label>
              <input
                type="tel"
                id="mobile"
                name="mobile"
                inputMode="numeric"
                required
              />
            </div>
          </div>

          <div className="form-group" id="message_area">
            <label htmlFor="address">{getInTouchData.fields.address}:</label>
            <textarea
              id="address"
              name="address"
              required
            />
          </div>

          <div className="details">
            <div className="form-group">
              <label htmlFor="country">{getInTouchData.fields.country}:</label>
              <input
                type="text"
                id="country"
                name="country"
                required
              />
            </div>
            <div className="form-group" id='email_section'>
              <label id='email_label' htmlFor="email">{getInTouchData.fields.email}:</label>
              <input
               
                type="email"
                id="email"
                name="email"
                required
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="message">{getInTouchData.fields.message}:</label>
            <textarea
              id="message"
              name="message"
              required
            />
          </div>

          <button type="submit" className="send-btn">
            {getInTouchData.buttonText}
          </button>
        </form>
      </div>

      <div className="map_image">
        <iframe
          src={getInTouchData.mapUrl}
          width="600"
          height="450"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default GetTouch;
