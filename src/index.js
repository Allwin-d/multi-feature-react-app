import React from "react";
import { createRoot } from "react-dom/client"; // ✅ use createRoot
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./Components/ShoppingCart/store";
import App from "./App";
import "./index.css";

const root = createRoot(document.getElementById("root")); // ✅ create root

root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
