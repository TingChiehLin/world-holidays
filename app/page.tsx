"use client";

import { QueryClientProvider, QueryClient } from "react-query";
import Home from "./Home";
import "./globals.css";

const queryClient = new QueryClient();

const App = () => {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Home />
      </QueryClientProvider>
    </>
  );
};

export default App;
