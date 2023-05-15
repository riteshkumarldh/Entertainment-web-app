import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

// provider redux
import { Provider } from "react-redux";
// redux store
import { store } from "./app/store.js";

// scss
import "./styles/index.scss";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
