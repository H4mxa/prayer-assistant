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

import {
  onAuthStateChanged,
  storeAuthUser,
  subscribeToMessages,
} from "actions";

const store = initStore();

class App extends React.Component {
  componentDidMount() {
    this.unsubscribeAuth = onAuthStateChanged((authUser) => {
      store.dispatch(storeAuthUser(authUser));

      if (authUser) {
        this.unsubscribeMessages = store.dispatch(
          subscribeToMessages(authUser.uid)
        );
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeAuth();
    this.unsubscribeMessages();
  }

  render() {
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
}

export default App;
