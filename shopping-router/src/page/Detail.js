import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import Form from 'react-bootstrap/Form'; 

const Detail = () => {

  let {id} = useParams();
  const [product, setProduct] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);
  const isAddToCartEnabled = selectedSize != null && selectedColor != null;

  const getProductDetail = async() => {
    let url = `http://localhost:4000/products/${id}`;
    let response = await fetch(url);
    let data = await response.json();
    // console.log("data: " + data);
    setProduct(data);
  }

  useEffect(() => {
    getProductDetail();
  }, []);

  const handleColorClick = (idx) => {
    setSelectedColor(idx);
  }

  const handleSizeClick = (idx) => {
    setSelectedSize(idx);
  }

  const addCommasToNumber = (num) => {
    let number = (num != null) ? num : 0;
    return number.toLocaleString() + "원";
  }

  return (
    <div>
      <Container className="detail-container">
        <Row className="detail-wrapper">
          <Col className="img-area">
            <img src={product?.img} />
          </Col>
          <Col className="info-area">
            <div className="card-tag">
              <div className={`font-sm ${product?.new == true ? "card-new-show" : "card-hidden"}`}>
                {product?.new == true ? "NEW" : ""}
              </div>
              <div className={`font-sm ${product?.best == true ? "card-best-show" : "card-hidden"}`}>
                {product?.best == true ? "BEST" : ""}
              </div>
            </div>

            <div className="product-name">{product?.title}</div>
            <div>{`${addCommasToNumber(product?.price)}`}</div>

            <div className="color-area">
              <div className="select-txt">색상</div>
              <div className="select-boxes">
                {product?.color.map((item, idx) => (
                  <div
                    key={idx}
                    className={`select-box ${selectedColor == idx ? "selected" : ""}`}
                    onClick={() => handleColorClick(idx)}>
                      {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="size-area">
              <div className="select-txt">사이즈</div>
              <div className="select-boxes">
                {product?.size.map((item, idx) => (
                  <div
                    key={idx}
                    className={`select-box ${selectedSize == idx ? "selected" : ""}`}
                    onClick={() => handleSizeClick(idx)}>
                      {item}
                  </div>
                ))}
              </div>
            </div>
            
            <div className="select-txt">제품 설명</div>
            <div className="card-desc">{product?.desc}</div>

            <button
              className={`add-to-cart-btn ${isAddToCartEnabled ? "enabled" : ""}`}
              disabled={!isAddToCartEnabled}>
                {isAddToCartEnabled ? (
                  <>
                    장바구니에 담기
                    <FontAwesomeIcon icon={faCartShopping} className="cart-icon" />
                  </>
                    ) : ("컬러와 사이즈를 선택해 주세요")}
            </button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Detail;
