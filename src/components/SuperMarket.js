import React from "react";
import SuperMarketTemplate from "./SuperMarketTemplate";
import ShopItemList from "./ShopItemList";
import BasketItemList from "./BasketItemList";

/**
 * SuperMarketTemplate 안에, Basket 과 ShopItemList 를 전달해서 보여줄 것
 */
const SuperMarket = () => {
  return (
    <SuperMarketTemplate items={<ShopItemList />} basket={<BasketItemList />} />
  );
};

export default SuperMarket;
