import React, { useState } from 'react';
// import './Contact.css'; // Import your CSS file

function Profile() {
  const [messageSent, setMessageSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessageSent(true);
  };

  return (
    <div className="contact-container">
      <h1>PROFILE</h1>
      <p>
      
      </p>
      {!messageSent ? (
        <form id="form" onSubmit={handleSubmit}>
          <div className="wrapper">
            <input type="text" placeholder="Your name"/>
            <div className="gradient-bg"></div>
          </div>
          <div className="wrapper">
            <input type="Email" placeholder="E-mail" />
            <div className="gradient-bg"></div>
          </div>
          <div className="wrapper">
            <input type="DOB" placeholder="Date of Birth"/>
            <div className="gradient-bg"></div>
          </div>
          <div className="wrapper">
          <input type="Ph no" placeholder="Phone"/>
          <div className="gradient-bg"></div>
        </div>
          <button type="submit" style={{background: "blue"}}>Save</button>
        </form>
      ) : (
        <p>Data Saved. <br /> </p>
      )}
    </div>
  );
}

export default Profile;
