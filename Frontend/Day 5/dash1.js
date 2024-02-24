import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiLogOut } from 'react-icons/fi';

import WorkPage from './dashboard';

import './dash1.css';
import Order1 from './dash/order1';


const Dash1 = () => {
  const [currentPage, setCurrentPage] = useState('WorkPage');
  const navigate = useNavigate();

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleLogout = () => {
    navigate('/dashboard');
  };

  let content = null;
  switch (currentPage) {

    case 'reports':
      content = <Order1/>;
      break;
    default:
      content = <Order1/>;
      break;
  }

  return (
    <div className="dashboard">
      <div className="sidebar">
        <div className="sidebar-heading">User Dashboard</div>
        <ul className="sidebar-menu">
         
          <li
            className={`sidebar-menu-item ${
              currentPage === 'reports' ? 'active' : 'WorkPage'
            }`}
            onClick={() => handlePageChange('reports')}
          >
            <span className="sidebar-menu-item-icon"></span>
            <span className="sidebar-menu-item-text">Add Policies</span>
          </li>
          <li
            className={`sidebar-menu-item ${
              currentPage === 'reports' ? 'active' : 'WorkPage'
            }`}
            onClick={() => handlePageChange('reports')}
          >
            <span className="sidebar-menu-item-icon"></span>
            <span className="sidebar-menu-item-text"><a href='/ExisPol'>Existing Policies</a></span>
          </li>
         
          <li className="sidebar-menu-item" onClick={handleLogout}>
            <span className="sidebar-menu-item-icon"><FiLogOut /></span>
            <span className="sidebar-menu-item-text"> return </span>
          </li>
        </ul>
      </div>
      <div className="content">{content}</div>
    </div>
  );
};

export default Dash1;