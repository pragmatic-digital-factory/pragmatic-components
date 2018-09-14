import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { IntlProvider } from "react-intl";
import "./index.css";

import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(
  <IntlProvider locale="en">
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </IntlProvider>,
  document.getElementById("root")
);
registerServiceWorker();
