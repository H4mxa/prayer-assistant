import React from "react";

import { connect } from "react-redux";

import Sidebar from "Components/Sidebar";
import Navbar from "Components/Navbar";
import Spinner from "Components/Spinner";
import Routes from "./Routes";

import { logout } from "actions";

class ServiceApp extends React.Component {
  handleLogout = () => this.props.dispatch(logout());

  renderApplication = (auth) => (
    <React.Fragment>
      <Navbar
        loadFresh
        auth={auth}
        logout={this.handleLogout}
        id="navbar-main"
      />
      <Navbar auth={auth} logout={this.handleLogout} id="navbar-clone" />
      <Sidebar />
      <Routes />
    </React.Fragment>
  );

  render() {
    const { auth } = this.props;
    return auth.isAuthResolved ? this.renderApplication(auth) : <Spinner />;
  }
}

const mapStateToProps = (state) => ({ auth: state.auth });

export default connect(mapStateToProps)(ServiceApp);
