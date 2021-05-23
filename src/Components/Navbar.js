/* eslint jsx-a11y/anchor-is-valid: 0 */

import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import { motion } from "framer-motion";

const Navbar = (props) => {
  const { pathname } = useLocation();
  const { user, isAuth } = props.auth;
  const { logout, loadFresh } = props;

  useEffect(() => {
    if (!loadFresh) {
      return;
    }
    const script = document.createElement("script");
    script.src = `${process.env.PUBLIC_URL}/js/fresh.js`;
    script.async = true;
    document.body.appendChild(script);
  }, [loadFresh]);

  return (
    <nav
      id={props.id || ""}
      className="navbar is-fresh is-transparent no-shadow "
      role="navigation"
      aria-label="main navigation"
    >
      <div className="container">
        <div className="navbar-brand">
          <a className="navbar-item is-hidden-desktop is-hidden-tablet">
            <div
              id="menu-icon-wrapper"
              className="menu-icon-wrapper"
              style={{ visibility: "visible" }}
            >
              <svg width="1000px" height="1000px">
                <path
                  className="path1"
                  d="M 300 400 L 700 400 C 900 400 900 750 600 850 A 400 400 0 0 1 200 200 L 800 800"
                ></path>
                <path className="path2" d="M 300 500 L 700 500"></path>
                <path
                  className="path3"
                  d="M 700 600 L 300 600 C 100 600 100 200 400 150 A 400 380 0 1 1 200 800 L 800 200"
                ></path>
              </svg>
              <button
                id="menu-icon-trigger"
                className="menu-icon-trigger"
              ></button>
            </div>
          </a>

          <a
            role="button"
            className="navbar-burger"
            aria-label="menu"
            aria-expanded="false"
            data-target="navbar-menu"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div id="navbar-menu" className="navbar-menu is-static">
          <div className="navbar-start">
            <a className="navbar-item is-hidden-mobile">
              <div
                id="menu-icon-wrapper"
                className="menu-icon-wrapper"
                style={{ visibility: "visible" }}
              >
                <svg width="1000px" height="1000px">
                  <path
                    className="path1"
                    d="M 300 400 L 700 400 C 900 400 900 750 600 850 A 400 400 0 0 1 200 200 L 800 800"
                  ></path>
                  <path className="path2" d="M 300 500 L 700 500"></path>
                  <path
                    className="path3"
                    d="M 700 600 L 300 600 C 100 600 100 200 400 150 A 400 380 0 1 1 200 800 L 800 200"
                  ></path>
                </svg>
                <button
                  id="menu-icon-trigger"
                  className="menu-icon-trigger"
                ></button>
              </div>
            </a>
            <Link to="/" className="navbar-item is-secondary">
              <div id="logo">Prayer Assistant</div>
            </Link>
          </div>

          <div className="navbar-end parent">
            {user && (
              <div className="navbar-item is-secondary user-welcome">
                {`Hi ${user.fullName}`}
              </div>
            )}
            <Link to="/" className="navbar-item is-secondary child">
              Home
            </Link>
            <Link to="/services" className="navbar-item is-secondary">
              Services
            </Link>
            <Link to="/faq" className="navbar-item is-secondary">
              Faq
            </Link>
            <Link to="/profile" className="navbar-item is-secondary">
              Profile
            </Link>
            {isAuth && (
              <div className="navbar-item has-dropdown is-hoverable">
                <a className="navbar-link">Manage</a>

                <div className="navbar-dropdown">
                  <Link to="/services/new" className="navbar-item">
                    Create Service
                  </Link>
                  <Link to="/services/me" className="navbar-item">
                    Your Services
                  </Link>
                </div>
              </div>
            )}

            {!isAuth && (
              <React.Fragment>
                <Link
                  to="/login"
                  className="navbar-item is-second  ary modal-trigger"
                  data-modal="auth-modal"
                >
                  Log in
                </Link>
                <Link className="navbar-item" to="/register">
                  <span className="button signup-button rounded secondary-btn raised">
                    Sign up
                  </span>
                </Link>
              </React.Fragment>
            )}

            {isAuth && (
              <div className="navbar-item" onClick={logout}>
                <span className="button signup-button is-danger rounded  raised">
                  Logout
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
