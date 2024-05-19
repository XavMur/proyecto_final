/* 
  Como charlamos en clase el desarrollo de front y back end estara listo para la siguiente entrega.
  Muchas gracias
*/

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <GoogleOAuthProvider clientId="676705906175-f9q6o6rresqtdcjeaolk58ndd91vggsf.apps.googleusercontent.com">
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  </GoogleOAuthProvider>
);
