import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./app/store";
import App from "./App";
import "./index.css";
import Login from "./features/login/Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="/tasks" element={<App />} />
        </Routes>
      </Router>
    </Provider>
  </React.StrictMode>
);
