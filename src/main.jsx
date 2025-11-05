import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import React from "react";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* The 'basename' prop has been removed from <BrowserRouter>.
      This is because your site is now served from the root ( / )
      of your custom domain (miniduoshan.me), not the /My-Portfolio/ sub-directory.
    */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);