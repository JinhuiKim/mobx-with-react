import React, { Component } from "react";
import { observable, action } from "mobx";
import { observer } from "mobx-react";

/**
 * setState없이 값을 바꿔주면 알아서 렌더링 됨
 * 코드 최하단의 observer가 observable 값이 변할 때 컴보넌트의 forceUpdate를 호출하게 함으로써 자동으로 변화가 화면에 반영됨
 */
// **** 최하단에 잇던 observer 가 이렇게 위로 올라옵니다.
@observer
class Counter extends Component {
  @observable number = 0;

  @action
  increase = () => {
    this.number++;
  };

  @action
  decrease = () => {
    this.number--;
  };

  render() {
    return (
      <div>
        <h1>{this.number}</h1>
        <button onClick={this.increase}>+1</button>
        <button onClick={this.decrease}>-1</button>
      </div>
    );
  }
}

// **** decorate 는 더 이상 필요 없어집니다.
// decorate(Counter, {
//   number: observable,
//   increase: action,
//   decrease: action
// })

// export default observer(Counter);
// **** observer 는 코드의 상단으로 올라갑니다.
export default Counter;
