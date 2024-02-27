import React, { useState } from 'react';
import './Contact.css'; // Import your CSS file

function ContactForm() {
  const [messageSent, setMessageSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessageSent(true);
  };

  return (
    <div className="contact-container">
      <h2>Enquire</h2>
      <p>
        Feel free to get in touch with me with anything related to the courses or you can just say hi. I will get back to you as soon as possible.
      </p>
      {!messageSent ? (
        <form id="form" onSubmit={handleSubmit}> 
          <div className="wrapper">
            <input type="text" placeholder="Your name"/>
            <div className="gradient-bg"></div>
          </div>
          <div className="wrapper">
            <input type="email" placeholder="Email address" />
            <div className="gradient-bg"></div>
          </div>
          <div className="wrapper">
            <input type="text" placeholder="Subject"/>
            <div className="gradient-bg"></div>
          </div>
          <div className="wrapper wrapper-big">
            <textarea placeholder="Message"></textarea>
            <div className="gradient-bg"></div>
          </div>
          <button type="submit" style={{background: "blue"}}>Send</button>
        </form>
      ) : (
        <p>Thanks for your message. <br /> I'll get back to you soon. 😃</p>
      )}
    </div>
  );
}

export default ContactForm;
