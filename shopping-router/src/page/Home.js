import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from "react-bootstrap";
import ProductCard from '../component/ProductCard';
import { useSearchParams } from 'react-router-dom';

const Home = () => {

  const [productList, setProductList] = useState([]);
  const [query, setQuery] = useSearchParams();

  // API 호출
  const getProducts = async() => {
    let searchQuery = query.get('q') || "";
    // console.log("searchQuery: " + searchQuery);
    let url = `http://localhost:4000/products/?q=${searchQuery}`;
    let response = await fetch(url);
    let data = await response.json();
    // console.log("data: " + data);
    setProductList(data);
  }

  useEffect(() => {
    getProducts();
  }, [query]);

  return (
    <div>
      <Container className="home-container">
        <Row>
          {productList.map((item) => (
            <Col xs={12} md={6} lg={3}>
              <ProductCard item={item}/>
            </Col>
          ))}
        </Row>
      </Container>
      
    </div>
  );
};

export default Home;
