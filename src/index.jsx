import React from "react";
import ReactDom from "react-dom";
import { RecoilRoot } from "recoil";
import "./styles.scss";

const Main = () => (
  <RecoilRoot>
    <h1>Hello World</h1>
  </RecoilRoot>
);

ReactDom.render(<Main />, document.getElementById("app"));
