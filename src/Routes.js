import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./Pages/Home";
import FaqPage from "./Pages/Faq";
import ProfilePage from "./Pages/Profile";
import ServicesPage from "./Pages/Services";
import ServiceDetailPage from "./Pages/ServiceDetail";
import LoginPage from "./Pages/Login";
import RegisterPage from "./Pages/Register";

const Routes = () => (
  <Switch>
    <Route path="/Register">
      <RegisterPage />
    </Route>
    <Route path="/Login">
      <LoginPage />
    </Route>
    <Route path="/services/:serviceId">
      <ServiceDetailPage />
    </Route>
    <Route path="/services">
      <ServicesPage />
    </Route>
    <Route path="/Profile">
      <ProfilePage />
    </Route>
    <Route path="/Faq">
      <FaqPage />
    </Route>
    <Route path="/">
      <Home />
    </Route>
  </Switch>
);

export default Routes;
