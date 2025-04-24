import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n";
import { StyledEngineProvider } from "@mui/material/styles";
import { HelmetProvider } from "react-helmet-async";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <StyledEngineProvider>
      <Suspense fallback="Loading...">
        <I18nextProvider i18n={i18n}>
          <HelmetProvider>
            <App />
          </HelmetProvider>
        </I18nextProvider>
      </Suspense>
    </StyledEngineProvider>
  </React.StrictMode>
);
