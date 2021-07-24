import React from "react";
import SuperMarketTemplate from "./SuperMarketTemplate";

/**
 * SuperMarketTemplate 안에, 나중에 우리가 만들 Basket 과 ShopItemList 를 전달해서 보여줄 것
 * 지금은 아직 안만들었으니 nul
 */
const SuperMarket = () => {
  return <SuperMarketTemplate items={null} basket={null} />;
};

export default SuperMarket;
