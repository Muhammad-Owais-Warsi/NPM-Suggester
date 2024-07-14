import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { PackageProvider } from "./components/PackageProvider.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <PackageProvider>
      <App />
    </PackageProvider>
  </React.StrictMode>
);
