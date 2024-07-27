import React from 'react';
import { useNavigate } from 'react-router-dom';

const ProductCard = ({item}) => {

  const navigate = useNavigate();
  const showDetail = () => {
    navigate(`/product/${item.id}`);
  }

  const addCommasToNumber = (num) => {
    let number = (num != null) ? num : 0;
    return number.toLocaleString() + "원";
  }

  return (
    <div className="productCard font-sm" onClick={showDetail}>
      <img src={item?.img} className="card-image"/>
      <div className="card-tag">
        <div className={`font-sm ${item?.new == true ? "card-new-show" : "card-hidden"}`}>
          {item?.new == true ? "NEW" : ""}
        </div>
        <div className={`font-sm ${item?.best == true ? "card-best-show" : "card-hidden"}`}>
          {item?.best == true ? "BEST" : ""}
        </div>
      </div>
      <div className="card-info">
        <div>{item?.title}</div>
        <div>{`${addCommasToNumber(item?.price)}`}</div>
      </div>
    </div>
  );
};

export default ProductCard;
