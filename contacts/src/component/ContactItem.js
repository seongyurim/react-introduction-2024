import React from 'react';
import { Container, Row, Col, Form, Button } from "react-bootstrap";

const ContactItem = ({item}) => {
  return (
    <Row>
      <Col lg={2}>
        <img width={60} src='https://upload.wikimedia.org/wikipedia/commons/b/bc/Unknown_person.jpg'/>
      </Col>
      <Col lg={10}>
        <div>{item.name}</div>
        <div>{item.phoneNumber}</div>
        <div>{item.memo}</div>
      </Col>
    </Row>
  )
};

export default ContactItem;
