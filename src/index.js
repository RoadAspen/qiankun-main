import React from "react";
import ReactDOM from "react-dom";
import {
  registerMicroApps,
  start,
  runAfterFirstMounted,
  initGlobalState,
} from "qiankun";
import { microApps } from "./main/microApps.config";
import App from "./App.js";

ReactDOM.render(<App />, document.getElementById("root"));
// 初始化 state
const initialState = {
  user: {}, // 用户信息
};
const actions = initGlobalState(initialState);
actions.onGlobalStateChange((state, prev) => {
  // state: 变更后的状态; prev 变更前的状态
  console.log("prev", prev);
  console.log("state", state);
});
actions.setGlobalState({ a: 2 });
actions.offGlobalStateChange();

registerMicroApps(microApps, {
  beforeLoad: (app) => {
    console.log("before load app.name====>>>>>", app.name);
  },
  beforeMount: [
    (app) => {
      console.log("[LifeCycle] before mount %c%s", "color: green;", app.name);
    },
  ],
  afterMount: [
    (app) => {
      console.log("[LifeCycle] after mount %c%s", "color: green;", app.name);
    },
  ],
  afterUnmount: [
    (app) => {
      console.log("[LifeCycle] after unmount %c%s", "color: green;", app.name);
    },
  ],
});
// 启动 qiankun
start();

runAfterFirstMounted(() => {
  console.log("[MainApp] first app mounted");
});
