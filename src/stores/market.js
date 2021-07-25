import { observable, action, computed } from "mobx";

export default class MarketStore {
  @observable selectedItems = [];

  // 루트 스토어 값을 저장
  constructor(root) {
    this.root = root;
  }

  @action
  put = (name, price) => {
    // market에서 counter에 접근
    const { number } = this.root.counter;
    // 존재하는지 찾고
    const exists = this.selectedItems.find((item) => item.name === name);
    if (!exists) {
      // 존재하지 않는다면 새로 집어넣습니다.
      this.selectedItems.push({
        name,
        price,
        count: number,
      });
      return;
    }
    // market에서 상품을 한번 집어 올 때 마다 카운터에 있는 상태의 갯수만큼 들고오게 구현
    exists.count += number;
  };

  @action
  take = (name) => {
    const itemToTake = this.selectedItems.find((item) => item.name === name);
    itemToTake.count--;
    if (itemToTake.count === 0) {
      // 갯수가 0 이면
      this.selectedItems.remove(itemToTake); // 배열에서 제거처리합니다.
    }
  };

  @computed
  get total() {
    console.log("총합 계산...");
    return this.selectedItems.reduce((previous, current) => {
      return previous + current.price * current.count;
    }, 0);
  }
}
