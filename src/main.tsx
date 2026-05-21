import React from "react";
import ReactDOM from "react-dom/client";
import { RelayEnvironmentProvider } from "react-relay";
import { environment } from "./relay/environment";
import App from "./App";
import "./style.css";

ReactDOM.createRoot(document.getElementById("app")!).render(
  <React.StrictMode>
    <RelayEnvironmentProvider environment={environment}>
      <App />
    </RelayEnvironmentProvider>
  </React.StrictMode>
);
