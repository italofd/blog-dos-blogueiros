import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "./theme";
import "@fontsource/ibm-plex-sans";
import "@fontsource/inter";
import "@fontsource/abel";
import "@fontsource/roboto";
import "@fontsource/abeezee";
import { UserProvider } from "./contexts/UserContext";
import { FirebaseProvider } from "./contexts/FirebaseContext";
import { AuthProvider } from "./contexts/AuthContext";

ReactDOM.render(
  <React.StrictMode>
    <FirebaseProvider>
      <AuthProvider>
        <UserProvider>
          <ChakraProvider theme={theme}>
            <App />
          </ChakraProvider>
        </UserProvider>
      </AuthProvider>
    </FirebaseProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
