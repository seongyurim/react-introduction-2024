import '../reset.css';
import './AppLayout.style.css';
import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const AppLayout = () => {
  const navList = [
    { name: '홈', path: '/' },
    { name: '영화', path: '/movies'},
    { name: '디테일', path: '/movies/:id'},
  ]

  return (
    <div className='navigation'>
      <div className='nav-container'>
        <div className='nav-left-area'>
          <div className='logo'>
            <Link to='/' className='dom-link'>NETFLIP</Link>
          </div>
          <ul className='nav-list'>
            {navList.map((item, idx) => (
              <li key={idx}>
                <Link to={item.path} className='dom-link nav-item'>{item.name}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className='search-bar'>
          <input type="text" />
        </div>
      </div>
      <Outlet />
    </div>
  )
};

export default AppLayout;
