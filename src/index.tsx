import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import GlobalStyle from "./styles/global";
import Providers from "./providers";

import { BrowserRouter } from "react-router-dom";
// import { AnimatePresence } from "framer-motion";

const root = ReactDOM.createRoot(document.getElementById("root")!);
root.render(
  // <AnimatePresence exitBeforeEnter>
  <BrowserRouter>
    <React.StrictMode>
      <Providers>
        <GlobalStyle />
        <App />
      </Providers>
    </React.StrictMode>
  </BrowserRouter>
  // </AnimatePresence>
);
