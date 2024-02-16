import { GoogleOAuthProvider } from "@react-oauth/google";
import React, { useEffect } from "react";
import Routes from "./Routes";
import { isLocalhost } from "utils/helper";



function App() {
  useEffect(() => {
    if (isLocalhost()) {
      const ls = {
        user: '{"id":1,"status":true,"dateCreated":"2024-01-21T15:09:31.229Z","dateModified":"2024-01-21T15:09:31.229Z","client":null,"createdBy":null,"lastModifiedBy":null,"json":null,"firstName":"Super","lastName":"User","role":1,"userName":"techqueue","email":"info@techqueue.in","phone":null,"address_line1":null,"address_line2":null,"address_city":null,"address_state":null,"address_country":null,"address_pin":null,"planType":null,"address":"-","roleInfo":{"name":"Super Admin","id":1}}',
      };
      for (const key in ls) {
        if (Object.hasOwnProperty.call(ls, key)) {
          const ele = ls[key];
          localStorage.setItem(key, ele);
        }
      }
    }
  }, []);
  return (
    <GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}>
      <Routes />
    </GoogleOAuthProvider>
  );
}

export default App;
