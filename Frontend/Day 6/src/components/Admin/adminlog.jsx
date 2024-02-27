// import React, { useState } from 'react';
// import './adminlog.css'; // Import your CSS file
// import { Route } from 'react-router-dom';

// function SignUpForm({ setActivePanel }) {
//   return (
//     <div className="form-container sign-up-container">
//       <form>
//         <h2>User Signup</h2>
//         <input placeholder="Username" />
//         <input placeholder="Email" />
//         <input placeholder="Password" />
        
//         <button onClick={() => setActivePanel('signIn')}>Register</button>
//       </form>
//     </div>
//   );
// }

// function AdminForm({ setActivePanel }) {
//   return (
//     <div className="form-container sign-in-container">
//       <form>
//         <h2>UserLogin</h2>
//         <input placeholder="Username" />
//         <input placeholder="Password" />
        
//         <button onClick={() => setActivePanel('signUp')}>Login</button>
//       </form>
//     </div>
//   );
// }

// function AuthForm() {
//   const [activePanel, setActivePanel] = useState('signIn');

//   return (
//     <div className={`container ${activePanel === 'signIn' ? '' : 'right-panel-active'}`} id="container">
//       <SignUpForm setActivePanel={setActivePanel} />
//       <SignInForm setActivePanel={setActivePanel} />
//       <div className="overlay-container">
//         <div className="overlay">
//           <div className="bg-bubbles">
//             <li></li>
//             <li></li>
//             <li></li>
//             <li></li>
//             <li></li>
//             <li></li>
//             <li></li>
//             <li></li>
//             <li></li>
//             <li></li>
//           </div>
//           <div className="overlay-panel overlay-left">
//             <h1 id='t2'>Welcome Back!</h1>
//             <p>Enhance skills that meet your need online</p>
//             <button className="ghost" id="signIn" onClick={() => setActivePanel('signIn')}>Sign In</button>
//           </div>
//           <div className="overlay-panel overlay-right">
//             <h1 id='t2'>Hello, Friend!</h1>
//             <p>Enter your personal details and start the journey with us</p>
//             <button className="ghost" id="signUp" onClick={() => setActivePanel('signUp')}>Register</button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default AdminForm;


import React, { useState } from 'react';
// import './logsig.css';
import { Route } from 'react-router-dom';
import { Link } from 'react-router-dom';


function SignUpForm({ setActivePanel }) {
  return (
    <div className="form-container sign-up-container">
      <form>
        <h2>Admin Signup</h2>
        <input placeholder="Username"  required/>
        <input placeholder="Email" required/>
        <input placeholder="Password"required />
        
        <button onSubmit={() => setActivePanel('/signin')}>Register</button>
      </form>
    </div>
  );
}

function SignInForm({ setActivePanel }) {
  return (
    <div className="form-container sign-in-container">
      <form>
        <h2>Admin Login</h2>
        <input placeholder="Username" required/>
        <input placeholder="Password" required/>
        
        <button onSubmit={() => setActivePanel('')}>Login</button>
      </form>
    </div>
  );
}

function AuthForm() {
  const [activePanel, setActivePanel] = useState('signIn');

  return (
    <div className={`container ${activePanel === 'signIn' ? '' : 'right-panel-active'}`} id="container">
      <SignUpForm setActivePanel={setActivePanel} />
      <SignInForm setActivePanel={setActivePanel} />
      <div className="overlay-container">
        <div className="overlay">
          <div className="bg-bubbles">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </div>
          <div className="overlay-panel overlay-left">
            <h1 id='t2'>Welcome Back!</h1>
            <p></p>
            <button className="ghost" id="signIn" onClick={() => setActivePanel('signIn')}>Sign In</button>
          </div>
          <div className="overlay-panel overlay-right">
            <h1 id='t2'>New Here?</h1>
            <p></p>
            <button className="ghost" id="signUp" onClick={() => setActivePanel('signUp')}>Register</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AuthForm;
