import React from 'react';
import { useDispatch } from "react-redux";

const ContactItem = ({item}) => {

  const dispatch = useDispatch();
  const deleteList = () => {
    if (window.confirm("정말 삭제하시겠어요?")) {
      dispatch({type:"DELETE_CONTACT", payload:{id:item.id}});
    }
    else {
      return false;
    }
  }

  return (
    <div className="contact-item-container">
      <div className="img-area">
        <img className="profile-img" src={item.profileImg}/>
      </div>
      <div className="info-area">
        <div className="info-name">{item.name}</div>
        <div className="info-phone">{item.phoneNumber}</div>
        <div className="info-memo">{item.memo}</div>
      </div>
      <div className="delete-area">
        <button className="delete-btn" onClick={deleteList}>✕</button>
      </div>

    </div>
  )
};

export default ContactItem;
