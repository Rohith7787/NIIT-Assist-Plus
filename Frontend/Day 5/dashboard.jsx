import React, { useState } from 'react';
import styled from 'styled-components';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './dashboard.css';

const Container = styled.div`
  /* Styles for the container */
`;

const Input = styled.input`
  /* Styles for the input */
`;

const Label = styled.label`
  /* Styles for the label */
`;

const Nav = styled.nav`
  /* Styles for the nav */
`;

const WorkPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchBarVisible, setIsSearchBarVisible] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen((prevIsMenuOpen) => !prevIsMenuOpen);
  };

  const handleSearchBarOpen = () => {
    setIsSearchBarVisible(true);
  };

  const handleSearchBarClose = () => {
    setIsSearchBarVisible(false);
  };

  return (
    <Container>
      <Input id="menu__toggle" type="checkbox" />
      <Label className="menu_btn" htmlFor="menu_toggle">
        <span></span>
      </Label>
      <Nav className="sidebar">
        <header>
          <div className="image-text">
            <span className="image">
              <img src="https://cdn.dribbble.com/users/118246/screenshots/2943355/media/53f28b287e734843125bbc4d55647e6e.gif" alt="" />
            </span>
            <div className="text logo-text">
              <span className="name">NovaGuard</span>
              <span className="profession">Rohith R</span>
            </div>
          </div>
          <i className="bx bx-chevron-right toggle"></i>
        </header>
        <div className="menu-bar">
          <div className="menu">
            <li className="search-box">
              <i className="bx bx-search icon"></i>
              <input type="text" placeholder="Search..." />
            </li>
            <ul className="menu-links">
              <li className="nav-link">
                <a href="/dash1">
                  <i className="bx bx-home-alt icon"></i>
                  <span className="text nav-text">Dashboard</span>
                </a>
              </li>
              <li className="nav-link">
                <a href="prof">
                  <i className="bx bx-bar-chart-alt-2 icon"></i>
                  <span className="text nav-text">Profile</span>
                </a>
              </li>
              <li className="nav-link">
                <a href="/Contact">
                  <i className="bx bx-bell icon"></i>
                  <span className="text nav-text">Contact</span>
                </a>
              </li>
              <li className="nav-link">
                <a href="/Stats">
                  <i className="bx bx-pie-chart-alt icon"></i>
                  <span className="text nav-text">Stats</span>
                </a>
              </li>
              <li className="nav-link">
                <a href="/About">
                  <i className="bx bx-wallet icon"></i>
                  <span className="text nav-text">About</span>
                </a>
              </li>
            </ul>
          </div>
          <div className="bottom-content">
            <li className="">
              <a href="/SignUpLogin">
                <i className="bx bx-log-out icon"></i>
                <span className="text nav-text">Logout</span>
              </a>
            </li>
            <li className="mode">
              <div className="sun-moon">
                <i className="bx bx-moon icon moon"></i>
                <i className="bx bx-sun icon sun"></i>
              </div>
              <span className="mode-text text">Dark mode</span>
              <div className="toggle-switch">
                <span className="switch"></span>
              </div>
            </li>
          </div>
        </div>
      </Nav>
      <section className="home">
       
        <Card className="text-center">
       
         
            
            
        </Card>
      </section>
    </Container>
  );
};

export default WorkPage;
