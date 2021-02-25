import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Pages/Home';
import FaqPage from './Pages/Faq';
import ProfilePage from './Pages/Profile';
import ServicesPage from './Pages/Services';
import LoginPage from './Pages/Login';
import RegisterPage from './Pages/Register';
import Sidebar from 'Components/Sidebar';

import Navbar from 'Components/Navbar';

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Navbar id='navbar-clone' />
        <Sidebar />
        <Switch>
          <Route path='/services'>
            <ServicesPage />
          </Route>
          <Route path='/Profile'>
            <ProfilePage />
          </Route>
          <Route path='/Faq'>
            <FaqPage />
          </Route>
          <Route path='/Login'>
            <LoginPage />
          </Route>
          <Route path='/Register'>
            <RegisterPage />
          </Route>
          <Route path='/'>
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
