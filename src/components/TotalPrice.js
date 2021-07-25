import React, { Component } from "react";
import { observer, inject } from "mobx-react";

/**
 * 함수형으로 작성하든, 클래스형으로 작성하든 크게 상관 없지만
 * 클래스형태로 작성하면 decorator를 편하게 쓸 수 있다.
 */
@inject(({ market }) => ({ total: market.total }))
@observer
class TotalPrice extends Component {
  render() {
    const { total } = this.props;
    return (
      <div>
        <hr />
        <p>
          <b>총합: </b> {total}원
        </p>
      </div>
    );
  }
}

export default TotalPrice;
