import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ChakraProvider } from "@chakra-ui/react";
import DataContextProvider from "./store/DataContextProvider.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider>
      <DataContextProvider>
        <App />
      </DataContextProvider>
    </ChakraProvider>
  </React.StrictMode>
);
