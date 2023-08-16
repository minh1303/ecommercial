import React from "react";
import ReactDOM from "react-dom/client";
import Router from "./Router";
import "./index.css";
import ShopContextProvider from "./Router";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ShopContextProvider >
      <Router />
    </ShopContextProvider>
  </React.StrictMode>
);
