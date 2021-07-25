import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "mobx-react"; // MobX 에서 사용하는 Provider
import "./index.css";
import App from "./App";
// import registerServiceWorker from "./registerServiceWorker";
import reportWebVitals from "./reportWebVitals";
import RootStore from "./stores";

const root = new RootStore(); // *** 루트 스토어 생성

// 프로젝트에 스토어를 적용 할 때 Provider 라는 컴포넌트를 사용
ReactDOM.render(
  <Provider {...root}>
    {/* ...root 으로 스토어 모두 자동으로 설정 */}
    <App />
  </Provider>,
  document.getElementById("root")
);

// registerServiceWorker();
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
