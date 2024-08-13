import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";

const SearchBox = () => {

  let [keyword, setKeyword] = useState("");
  let dispatch = useDispatch();

  const searchByName = (event) => {
    event.preventDefault();
    dispatch({type:"SEARCH_BY_NAME", payload:{keyword}});
  };

  return (
    <Form onSubmit={searchByName}>
      <Row>
        <Col lg={10}>
          <Form.Control
            type="text"
            placeholder="이름을 검색해보세요"
            onChange={(event) => setKeyword(event.target.value)}
          />
        </Col>
        <Col lg={2}>
          <Button type="submit" className="btns">검색</Button>
        </Col>
      </Row>
    </Form>
  )
};

export default SearchBox;
