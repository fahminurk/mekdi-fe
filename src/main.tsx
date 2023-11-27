import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/react-query.ts";
import { AuthProvider } from "./provider/AuthProvider.tsx";
import ModalProvider from "./provider/ModalProvider.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <ModalProvider />
        <App />
      </QueryClientProvider>
    </AuthProvider>
  </BrowserRouter>
);
