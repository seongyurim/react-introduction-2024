import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube, faFacebook, faInstagram, faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { useNavigate } from "react-router-dom";
import './Footer.style.css';

const Footer = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/');
    window.scrollTo(0, 0);
  }

  return (
    <footer className='footer-container'>
      <div className='footer-logo' onClick={handleClick}>NETFLIP</div>
      <div className='footer-socials-area'>
        <div className='footer-social-icon'><FontAwesomeIcon icon={faYoutube} /></div>
        <div className='footer-social-icon'><FontAwesomeIcon icon={faFacebook} /></div>
        <div className='footer-social-icon'><FontAwesomeIcon icon={faInstagram} /></div>
        <div className='footer-social-icon'><FontAwesomeIcon icon={faXTwitter} /></div>
      </div>
      <div className='footer-info-area'>
        <ul>
          <li>넷플립코리아 유한회사</li>
          <li>대표: 성유림(SEONG YURIM)</li>
          <li>사업자등록번호: 120-11-3553</li>
          <li>통신판매업신고: 2024-서울중랑-0809</li>
        </ul>
        <ul>
          <li>고객센터: 매일 00시~24시</li>
          <li>전화번호: 010-3051-0089</li>
          <li>대표메일: miruyseong@gmail.com</li>
          <li>채용문의: miruyseong@gmail.com</li>
        </ul>
      </div>
      <ul className='footer-link1-area'>
        <li>사업자 정보</li>
        <li>서비스 이용약관</li>
        <li>유료상품 이용약관</li>
        <li>자주 묻는 질문</li>
        <li>개인정보 처리방침</li>
      </ul>
      <ul className='footer-link2-area'>
        <li>넷플립 회원 탈퇴</li>
        <li>멤버십 변경/해지</li>
      </ul>
    </footer>
  );
};

export default Footer;