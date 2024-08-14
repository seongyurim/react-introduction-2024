import React, { useState } from 'react';
import { Form, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import profileDefault from "../asset/profile_default.jpg";

const ContactForm = () => {

  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [memo, setMemo] = useState('');
  const [profileImg, setProfileImg] = useState(profileDefault);
  const dispatch = useDispatch();

  const [focusedField, setFocusedField] = useState('');
  const [showNameMsg, setShowNameMsg] = useState(false);
  const [showPhoneMsg, setShowPhoneMsg] = useState(false);

  const addContact = (event) => {
    
    event.preventDefault(); // 리로드 막기
    const id = new Date().getTime(); // 타임스탬프로 고유 ID 생성
    let valid = true;

    if (name === "") {
      setShowNameMsg(true);
      valid = false;
    }
    else {
      setShowNameMsg(false);
    }

    if (phoneNumber === "") {
      setShowPhoneMsg(true);
      valid = false;
    }
    else {
      setShowPhoneMsg(false);
    }

    if (!valid) {
      return;
    }

    dispatch({type:"ADD_CONTACT", payload:{id, name, phoneNumber, memo, profileImg}});

    // 데이터 초기화
    setName("");
    setPhoneNumber("");
    setMemo("");
    setProfileImg(profileDefault);
  }

  const uploadProfileImg = (event) => {
    const { files } = event.target;
    const uploadFile = files[0]; // files 배열의 첫번째 파일 사용
    const reader = new FileReader(); // 파일을 읽는 객체
    reader.readAsDataURL(uploadFile); // 메서드를 통해 파일을 데이터 URL로 읽어오기
    reader.onloadend = () => { // 파읽 읽기가 완료되면 호출되는 이벤트 핸들러
      setProfileImg(reader.result); // 읽은 데이터 URL을 상태에 저장하고 src로 설정해서 화면에 표시
    }
  }

  const autoHyphen = (event) => {
    const target = event.target;
    target.value = target.value
     .replace(/[^0-9]/g, '') // 숫자가 아닌 문자 제거
     .replace(/^(\d{0,3})(\d{0,4})(\d{0,4})$/g, "$1-$2-$3") // 하이픈 추가
     .replace(/(\-{1,2})$/g, ""); // 여분의 스페이스 제거
  }

  return (
    <div>
      <Form className="contact-form-container" onSubmit={addContact}>
        <div className="img-area">
          <div className="img-wrapper">
            <label htmlFor="input-file">
            <img src={profileImg} alt="Profile Image" className="form-img"/>
            <div className="input-file-btn">+</div>
            </label>
            <input type="file" onChange={uploadProfileImg} className="input-file" id="input-file"/>
          </div>
        </div>

        <div className={`forms form-name ${showNameMsg ? "error" : (focusedField === "name" ? "focus" : "")} `}>
          <input
            type="text"
            placeholder="이름"
            value={name}
            onChange={(event) => setName(event.target.value)}
            onFocus={() => setFocusedField("name")}
            onBlur={() => setFocusedField("")}
          />
        </div>

        <div className={`forms form-phone-number ${showPhoneMsg ? "error" : (focusedField === "phone" ? "focus" : "")}`}>
          <input
            type="tel"
            placeholder="휴대전화번호"
            maxLength="13"
            onInput={autoHyphen}
            value={phoneNumber}
            onChange={(event) => setPhoneNumber(event.target.value)}
            onFocus={() => setFocusedField("phone")}
            onBlur={() => setFocusedField("")}
          />
        </div>

        <div className={`forms form-memo ${focusedField === "memo" ? "focus" : ""}`}>
          <input
            type="text"
            placeholder="[선택] 메모"
            value={memo}
            onChange={(event) => setMemo(event.target.value)}
            onFocus={() => setFocusedField("memo")}
            onBlur={() => setFocusedField("")}
          />
        </div>

        <div className="msgs">
          {showNameMsg && (<div className="msg-desc">이름: 필수 정보입니다.</div>)}
          {showPhoneMsg && (<div className="msg-desc">휴대전화번호: 필수 정보입니다.</div>)}
        </div>
        
        <Button variant="dark" type="submit" className="btn-add">
          <strong>연락처에 추가</strong>
        </Button>
      </Form>
    </div>
  )
};

export default ContactForm;
