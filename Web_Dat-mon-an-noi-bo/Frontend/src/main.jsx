import React from "react";
import ReactDOM from "react-dom/client";
import Login from "./Login/Login.jsx";
import Categoriesfilters from "./mainpage/categoriesfilters.jsx";
import Home from "./mainpage/Home.jsx";
import Navbar from "./mainpage/navbar.jsx";
import Card from "./mainpage/card.jsx";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* Container cho phần còn lại */}
    <div>
      <Navbar />
      <Home />
      {/* <Categoriesfilters /> */}
      {/* <Card/> */}
      
    </div>
  </React.StrictMode>
);
