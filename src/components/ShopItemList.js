import React from "react";
import ShopItem from "./ShopItem";
import { inject, observer } from "mobx-react"; // 불러오기

const items = [
  {
    name: "생수",
    price: 850,
  },
  {
    name: "신라면",
    price: 900,
  },
  {
    name: "포카칩",
    price: 1500,
  },
  {
    name: "새우깡",
    price: 1000,
  },
];

// **** onPut 함수 추가됨
const ShopItemList = ({ onPut }) => {
  const itemList = items.map((item) => (
    <ShopItem {...item} key={item.name} onPut={onPut} />
  ));
  return <div>{itemList}</div>;
};

// **** inject, observer 적용
// 함수형 컴포넌트에 inject 와 observer 를 적용할땐 이렇게 내보내주는 과정에서 사용하시면 조금 더 깔끔합니다.
export default inject(({ market }) => ({
  onPut: market.put,
}))(observer(ShopItemList));
