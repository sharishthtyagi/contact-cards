import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { UserInfo } from "./21-Video/UserInfo";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<div>{UserInfo()}</div>);

