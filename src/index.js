// import react from "react";
import reactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
const ele = document.querySelector("#root");
const root = reactDOM.createRoot(ele);

root.render(<App />);
