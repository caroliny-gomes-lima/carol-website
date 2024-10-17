import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
//import { ThemeProvider } from "./components";
import { Theme } from "./config";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "components";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <CssBaseline />
    <ThemeProvider theme={Theme.Dark}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);

reportWebVitals();
/*Web vitals são um conjunto de métricas úteis que visam capturar a experiência do usuário em uma página da web.
Essa biblioteca é usada para medir o desempenho da web(para medir a experiência do site no Google).*/
