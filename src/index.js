
import React from "react";

import ReactDOM from "react-dom/client";

import "./index.css";

import ShowList from "./components/ShowList";
import "bootstrap/dist/css/bootstrap.min.css";



const myComponent = <ShowList />;


const root = ReactDOM.createRoot(document.getElementById("root"));


root.render(myComponent);