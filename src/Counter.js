import React, { Component } from "react";
import { decorate, observable, action } from "mobx";
import { observer } from "mobx-react";

class Counter extends Component {
  number = 0;

  increase = () => {
    this.number++;
  };

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

decorate(Counter, {
  number: observable,
  increase: action,
  decrease: action,
});

export default observer(Counter);
/**
 * setState없이 값을 바꿔주면 알아서 렌더링 됨
 * 코드 최하단의 observer가 observable 값이 변할 때 컴보넌트의 forceUpdate를 호출하게 함으로써 자동으로 변화가 화면에 반영됨
 */
