import React, { useState } from 'react';
import { Form, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";

const ContactForm = () => {

  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [memo, setMemo] = useState('');
  const dispatch = useDispatch();

  const addContact = (event) => {
    event.preventDefault(); // 리로드 막기
    dispatch({type:"ADD_CONTACT", payload:{name, phoneNumber, memo}});
    setName("");
    setPhoneNumber("");
    setMemo("");
  }

  return (
    <div>
      <Form onSubmit={addContact}>
        <Form.Group className="mb-3" controlId="formName">
          <Form.Control
            type="text"
            placeholder="이름"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formContact">
          <Form.Control
            type="number"
            placeholder="휴대폰 번호"
            value={phoneNumber}
            onChange={(event) => setPhoneNumber(event.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formMemo">
          <Form.Control
            type="text"
            placeholder="메모"
            value={memo}
            onChange={(event) => setMemo(event.target.value)}
          />
        </Form.Group>
        
        <Button variant="primary" type="submit" className="btns">
          추가
        </Button>
      </Form>
    </div>
  )
};

export default ContactForm;
