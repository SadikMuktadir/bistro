import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Routes from "./Route/Routes";
import AuthProvider from "./Components/AuthProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
    <div className="max-w-7xl mx-auto">
      <Routes></Routes>
    </div>
    </AuthProvider>
  </React.StrictMode>
);
