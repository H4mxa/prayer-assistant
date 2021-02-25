import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Pages/Home';
import FaqPage from './Pages/Faq';
import ProfilePage from './Pages/Profile';
import ServicesPage from './Pages/Services';
import Sidebar from 'Components/Sidebar';

import Navbar from 'Components/Navbar';
import NavbarClone from 'Components/NavbarClone';

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <NavbarClone />
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
          <Route path='/'>
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
