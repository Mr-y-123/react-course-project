import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import ThemeContextProvider from "./context/ThemeContext.jsx";
import "./index.css";
import {ChakraProvider} from '@chakra-ui/react'
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider>
      <ThemeContextProvider>
        <App />
      </ThemeContextProvider>
    </ChakraProvider>
  </React.StrictMode>
);
