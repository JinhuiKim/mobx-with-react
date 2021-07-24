import React from "react";
import "./SuperMarketTemplate.css";

/**
 * 템플릿 형태의 컴포넌트로서 한쪽에는 상품을, 한쪽에는 장바구니를 props로 받아와서 보여줍니다.
 */
const SuperMarketTemplate = ({ items, basket }) => {
  return (
    <div className="SuperMarketTemplate">
      <div className="items-wrapper">
        <h2>상품</h2>
        {items}
      </div>
      <div className="basket-wrapper">
        <h2>장바구니</h2>
        {basket}
      </div>
    </div>
  );
};

export default SuperMarketTemplate;
