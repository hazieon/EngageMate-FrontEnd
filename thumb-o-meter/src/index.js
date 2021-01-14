import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/app/App";
import reportWebVitals from "./reportWebVitals";
import { RoleProvider } from "../src/context/roleContext";
import { SocketProvider } from "../src/context/socketContext";
import {
  ChakraProvider,
  ThemeProvider,
  theme,
  ColorModeProvider,
  CSSReset,
  extendTheme,
} from "@chakra-ui/react";
import { Auth0Provider } from "@auth0/auth0-react";

import { Fonts } from "./globalStyle";
// const fontTheme = extendTheme({
//   fonts: {
//     heading: "Montserrat",
//     body: "Montserrat",
//   },
// });
const domain = process.env.REACT_APP_AUTH0_DOMAIN;
const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <ColorModeProvider
      options={{
        useSystsemColorMode: true,
      }}
    >
      <Auth0Provider
        domain={domain}
        clientId={clientId}
        redirectUri={window.location.origin}
      >
        <RoleProvider>
          <SocketProvider>
            <ChakraProvider>
              <React.StrictMode>
                <Fonts />
                <App />
                <CSSReset />
              </React.StrictMode>
            </ChakraProvider>
          </SocketProvider>
        </RoleProvider>
      </Auth0Provider>
    </ColorModeProvider>
  </ThemeProvider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
