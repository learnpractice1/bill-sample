import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { ErrorBoundary } from "react-error-boundary";
import { ThemeProvider } from "./theme/ThemeContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";


const queryClient = new QueryClient(); 

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider>
      <ErrorBoundary fallback={<div>Something went wrong</div>}>
      <QueryClientProvider client={queryClient}>
        <App />
        </QueryClientProvider>
      </ErrorBoundary>
    </ThemeProvider>
  </StrictMode>
);
