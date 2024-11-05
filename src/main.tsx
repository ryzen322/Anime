import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter } from "react-router-dom";
import EpisodeProvider from "./components/store/EpisodeProvider.tsx";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import RootLayout from "./components/layouts/root-layout.tsx";
import { Toaster } from "@/components/ui/toaster";

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 0,
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
            <Toaster />
          </EpisodeProvider>
        </BrowserRouter>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </RootLayout>
  </React.StrictMode>
);
