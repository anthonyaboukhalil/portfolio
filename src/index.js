import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./assets/css/index.css";
import App from "./App";
import Qualifications from "./components/Qualifications";
import Footer from "./components/Footer";
import Navigation from "./components/Navigation";
import About from "./components/About";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route
          path="*"
          element={
            <main style={{ padding: "1rem" }}>
              <p>There's nothing here!</p>
            </main>
          }
        />
        <Route path="/" exact element={<App />} />

        <Route path="/about" exact element={<About />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  </React.StrictMode>
);
