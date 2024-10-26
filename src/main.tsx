import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter } from "react-router-dom";
import EpisodeProvider from "./components/store/EpisodeProvider.tsx";

import RootLayout from "./components/layouts/root-layout.tsx";

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000,
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RootLayout>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <EpisodeProvider>
            <App />
          </EpisodeProvider>
        </BrowserRouter>
      </QueryClientProvider>
    </RootLayout>
  </React.StrictMode>
);
