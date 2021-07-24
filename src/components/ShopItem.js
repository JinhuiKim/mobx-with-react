import React from "react";
import "./ShopItem.css";

const ShopItem = ({ name, price, onPut }) => {
  return (
    // ShopItem에서 클릭시 onPut에 현재 자신의 name과 price를 넣어서 호출하도록 설정
    <div className="ShopItem" onClick={() => onPut(name, price)}>
      <h4>{name}</h4>
      <div>{price}원</div>
    </div>
  );
};

export default ShopItem;
