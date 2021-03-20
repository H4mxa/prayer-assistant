import React from 'react';

// redux -------------
import { Provider } from 'react-redux';
import initStore from './store';
// --------------

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Pages/Home';
import FaqPage from './Pages/Faq';
import ProfilePage from './Pages/Profile';
import ServicesPage from './Pages/Services';
import ServiceDetailPage from './Pages/ServiceDetail';
import LoginPage from './Pages/Login';
import RegisterPage from './Pages/Register';

import Sidebar from 'Components/Sidebar';
import Navbar from 'Components/Navbar';

import { AnimatePresence } from 'framer-motion';
import GlobalStyle from 'Components/GlobalStyle';

const store = initStore();

function App() {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <Router>
        <Navbar />
        <Navbar id='navbar-clone' />
        <Sidebar />
        <Switch>
          <Route path='/Register'>
            <RegisterPage />
          </Route>
          <Route path='/Login'>
            <LoginPage />
          </Route>
          <Route path='/services/:serviceId'>
            <ServiceDetailPage />
          </Route>
          <Route path='/services'>
            <ServicesPage />
          </Route>
          <Route path='/Profile'>
            <ProfilePage />
          </Route>
          <Route path='/Faq'>
            <FaqPage />
          </Route>
          <Route path='/'>
            <Home />
          </Route>
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
