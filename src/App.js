import React, { Component } from "react";
import Counter from "./components/Counter";
import SuperMarket from "./components/SuperMarket";

// 우리가 어떤 값을 바꿨을 때 어떠한 컴포넌트들이 영향을 받고, 업데이트는 얼마나 걸리고, 어떠한 변화가 일어났는지에 대한 세부적인 정보를 볼 수 있게 해줍니다.
import DevTools from "mobx-react-devtools";

class App extends Component {
  render() {
    return (
      <div>
        <Counter />
        <hr />
        <SuperMarket />
        {process.env.NODE_ENV === "development" && <DevTools />}
      </div>
    );
  }
}

export default App;
