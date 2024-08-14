import React, { useState, useEffect } from 'react';
import ContactItem from './ContactItem';
import SearchBox from './SearchBox';
import { useSelector } from 'react-redux';

const ContactList = () => {
  const filteredList = useSelector(state => state.filteredList);

  return (
    <div>
      <SearchBox />
      <div className="total-count">현재 연락처의 인원은 <strong>{filteredList.length}</strong>명입니다.</div>
      {filteredList.map((item, index) => <ContactItem item={item} key={index}/>)}
    </div>
  )
};

export default ContactList;
