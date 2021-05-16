import React from "react";

import ServiceApp from "./ServiceApp";

// redux -------------
import { Provider } from "react-redux";
import { ToastProvider } from "react-toast-notifications";
import initStore from "./store";
// --------------

import { BrowserRouter as Router } from "react-router-dom";

import { AnimatePresence } from "framer-motion";
import GlobalStyle from "Components/GlobalStyle";

const store = initStore();

function App() {
  return (
    <Provider store={store}>
      <ToastProvider>
        <GlobalStyle />
        <Router>
          <ServiceApp />
        </Router>
      </ToastProvider>
    </Provider>
  );
}

export default App;
