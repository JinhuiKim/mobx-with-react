import React from "react";
import "./BasketItem.css";
import { observer } from "mobx-react";

/**
 * observer 를 하단이 아닌 위에서 설정해줘도 동일하게 작동
 */
const BasketItem = ({ name, price, count, onTake }) => {
  // const BasketItem = observer(({ name, price, count, onTake }) => {
  return (
    <div className="BasketItem" onClick={() => onTake(name)}>
      <div className="name">{name}</div>
      <div className="price">{price}원</div>
      <div className="count">{count}</div>
      <div className="return">갖다놓기</div>
    </div>
  );
};
// });

export default observer(BasketItem);
// export default BasketItem;
