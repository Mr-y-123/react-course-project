import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ChakraProvider } from "@chakra-ui/react";
import ContextProvider from "./store/CartContext.jsx";
import UserContextProvider from './store/UserProgresContext.jsx'
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider>
      <UserContextProvider>
        <ContextProvider>
          <App />
        </ContextProvider>
      </UserContextProvider>
    </ChakraProvider>
  </React.StrictMode>
);
