import React, { useState } from 'react';
import './Contact.css';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
    // You can access the form field values using the respective state variables
    // Reset the form fields after submission if needed
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div className="contact-form-container" style={{ backgroundImage: "url('https://media.istockphoto.com/id/1278554900/video/abstract-digital-grid-loopable-background-animation-blue.jpg?s=640x640&k=20&c=ahFdVoA-fJuf8OpFVlcXdw5Pf91iqMtIzVxW9AaxWI4=')" }}>
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={handleNameChange}
            placeholder="Enter your name"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
            placeholder="Enter your email"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            value={message}
            onChange={handleMessageChange}
            placeholder="Enter your message"
            required
          ></textarea>
        </div>
        <button type="submit" className="submit-btn">Submit</button>
      </form>
    </div>
  );
};

export default ContactForm;
