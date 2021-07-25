import CounterStore from "./counter";
import MarketStore from "./market";

/**
 * 스토어끼리 접근을 하려면, RootStore라는 것을 만들어주어야 함
 * 다른 스토어들을 불러오고 constructor에서 각 스토어를 만들어준 다음, this.스토어명 = new 새로운스토어(this)와 같이 입력
 * 뒷부분에서 this를 파라미터를 넣어주는 게 중요. 이렇게 함으로써 각 스토어들이, 현재 루트 스토어가 무엇인지 알 수 있게 됨
 * 각 스토어 만들 때 루트 스토어를 파라미터로 넘김
 */
class RootStore {
  constructor() {
    this.counter = new CounterStore(this);
    this.market = new MarketStore(this);
  }
}

export default RootStore;
