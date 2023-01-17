import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Providers from "./providers";
import { ChakraProvider } from "@chakra-ui/react";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ChakraProvider>
      <Providers>
        <App />
      </Providers>
    </ChakraProvider>
  </React.StrictMode>
);
