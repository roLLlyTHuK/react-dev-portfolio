import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import PreloadMedia from "./Components/PreloadMedia";
import { media } from "./Constants/constants";
import App from './App/App';
import './index.css';

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter basename="/">
      <PreloadMedia images={Object.values(media)}>
        <App />
      </PreloadMedia>
    </BrowserRouter>
  </React.StrictMode>
);
