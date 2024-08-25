import '../reset.css';
import './AppLayout.style.css';
import React, { useState, useRef, useEffect } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faUser } from '@fortawesome/free-solid-svg-icons';

const AppLayout = () => {
  const navList = [
    { name: '홈', path: '/' },
    { name: '영화', path: '/movies'},
    { name: '디테일', path: '/movies/:id'},
  ]

  const [isActive, setIsActive] = useState(false);
  const refInput = useRef(null); // input이 나타나는 즉시 focus 주기

  useEffect(() => {
    if (isActive && refInput.current) {
      refInput.current.focus();
    }
  }, [isActive]);

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

        <div className='nav-right-area'>
          <div className='nav-right-search-box'>
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              className={`nav-icons nav-search-icon ${isActive ? 'active' : ''}`}
              onClick={() => setIsActive(true)}
            />

            <div className={`search-input-wrapper ${isActive ? 'active' : ''}`}>
              <FontAwesomeIcon icon={faMagnifyingGlass} className='search-inner-icon'/>
              <input
                type='text'
                className='search-input'
                placeholder='제목, 사람, 장르'
                ref={refInput}
                onBlur={() => setIsActive(false)}
              />
            </div>
          </div>
          
          <div className='nav-right-user-box'>
            <FontAwesomeIcon icon={faUser} className='nav-icons'/>
          </div>
        </div>
      </div>
      <Outlet />
    </div>
  )
};

export default AppLayout;
