import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Theme } from "./config";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "components";
import { ModalProvider } from "context/Modal/ModalProvider";
import { GlobalLoader, LoadingProvider, ModalRoot } from "context";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);
root.render(
  <React.StrictMode>
    <CssBaseline />
    <ThemeProvider theme={Theme.dark}>
      <LoadingProvider>
        <ModalProvider>
          <App />
          <ModalRoot />
        </ModalProvider>
        <GlobalLoader />
      </LoadingProvider>
    </ThemeProvider>
  </React.StrictMode>,
);

reportWebVitals();
/*Web vitals são um conjunto de métricas úteis que visam capturar a experiência do usuário em uma página da web.
Essa biblioteca é usada para medir o desempenho da web(para medir a experiência do site no Google).*/
