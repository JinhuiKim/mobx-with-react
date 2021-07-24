import React, { Component } from "react";
import { observer, inject } from "mobx-react";

/**
 * 리덕스에서의 mapStateToProps / mapDispatchToProps처럼 스토어의 특정 값이나 함수만 넣어주고 싶다면
 */
// **** 함수형태로 파라미터를 전달해주면 특정 값만 받아올 수 있음.
@inject((stores) => ({
  number: stores.counter.number,
  increase: stores.counter.increase,
  decrease: stores.counter.decrease,
}))
@observer
class Counter extends Component {
  render() {
    const { number, increase, decrease } = this.props;
    return (
      <div>
        <h1>{number}</h1>
        <button onClick={increase}>+1</button>
        <button onClick={decrease}>-1</button>
      </div>
    );
  }
}

export default Counter;
