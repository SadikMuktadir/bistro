import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Routes from "./Route/Routes";
import AuthProvider from "./Components/AuthProvider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
const queryClient = new QueryClient();
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <div className="max-w-7xl mx-auto">
          <Routes></Routes>
        </div>
      </QueryClientProvider>
    </AuthProvider>
  </React.StrictMode>
);
