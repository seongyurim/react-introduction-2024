import '../reset.css';
import './AppLayout.style.css';
import React, { useState, useRef, useEffect } from 'react';
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faUser } from '@fortawesome/free-solid-svg-icons';

const navList = [
  { name: '홈', path: '/' },
  { name: '영화', path: '/movies'},
  { name: '애니메이션', path: '/movies?genre=애니메이션'},
  { name: '음악', path: '/movies?genre=음악'},
  { name: '판타지', path: '/movies?genre=판타지'},
]

const AppLayout = () => {
  const [keyword, setKeyword] = useState('');
  const [isActive, setIsActive] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const inputRef = useRef(null); // input이 나타나는 즉시 focus 주기
  const navigate = useNavigate();
  const location = useLocation(); // 현재 경로 가져오기

  useEffect(() => {
    if (isActive && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isActive]);

  const handleSubmit = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      searchByKeyword();
    }
  }

  const searchByKeyword = () => {
    navigate(`/movies?q=${keyword}`); // URL에 키워드 반영
    setKeyword('');
    setIsActive(false);
  }

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 0) {
        setIsScrolled(true);
      }
      else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);

    return () => { // 클린업(불필요한 이벤트리스너를 제거하여 메모리 누수 방지)
      window.removeEventListener('scroll', handleScroll);
    }
  }, []);

  // 현재 위치한 내비게이션 항목에만 CSS 클래스 부여
  const isNavItemActive = (item) => {
    const currentPath = location.pathname; // 현재 위치
    const currentGenre = new URLSearchParams(location.search).get('genre');

    // 장르 필터링 링크인 경우
    if (item.path.includes('?genre=')) {
      return item.path === `${currentPath}?genre=${currentGenre}`;
    }
    // 홈 또는 영화 링크인 경우
    else {
      return item.path === currentPath && !currentGenre;
    }
  }

  return (
    <div className='navigation'>
      <div className={`nav-container ${isScrolled ? 'scrolled' : ''}`}>
        <div className='nav-left-area'>
          <div className='logo'>
            <Link to='/' className='dom-link'>NETFLIP</Link>
          </div>
          <ul className='nav-list'>
            {navList.map((item, idx) => (
              <li key={idx}>
                <Link to={item.path} className={`dom-link nav-item ${isNavItemActive(item) ? 'active' : ''}`}>{item.name}</Link>
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
                placeholder='제목으로 검색'
                value={keyword}
                onChange={(event) => setKeyword(event.target.value)}
                onKeyPress={handleSubmit}
                ref={inputRef}
                onBlur={() => setIsActive(false)}
              />
            </div>
          </div>
          
          {/* <div className='nav-right-user-box'>
            <FontAwesomeIcon icon={faUser} className='nav-icons'/>
          </div> */}
        </div>
      </div>
      <Outlet />
    </div>
  )
};

export default AppLayout;
