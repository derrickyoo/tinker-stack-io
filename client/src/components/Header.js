import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

class Header extends Component {
  renderContent() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return (
          <div className="navbar-nav ml-auto">
            <a className="nav-link" href="/auth/google">
              Sign in
            </a>
            <a
              className="btn btn-outline-success my-2 my-sm-0"
              href="/auth/google"
            >
              Sign up
            </a>
          </div>
        );
      default:
        return (
          <div className="navbar-nav ml-auto">
            <ul className="navbar-nav ml-auto" />

            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="/"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Avatar
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="/">
                  Signed in as <br />
                  <strong>Username</strong>
                </a>
                <div className="dropdown-divider" />
                <a className="dropdown-item" href="/">
                  Profile
                </a>
                <div className="dropdown-divider" />
                <a className="dropdown-item" href="/">
                  Settings
                </a>
                <a className="dropdown-item" href="/api/logout">
                  Sign out
                </a>
              </div>
            </li>
          </div>
        );
    }
  }

  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light py-3">
        <div className="container">
          <Link
            to={this.props.auth ? "/dashboard" : "/"}
            className="navbar-brand"
          >
            TinkerStack
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <a className="nav-link" href="/">
                  Home <span className="sr-only">(current)</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Link
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="/"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Dropdown
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a className="dropdown-item" href="/">
                    Action
                  </a>
                  <a className="dropdown-item" href="/">
                    Another action
                  </a>
                  <div className="dropdown-divider" />
                  <a className="dropdown-item" href="/">
                    Something else here
                  </a>
                </div>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled" href="/">
                  Pricing
                </a>
              </li>
            </ul>

            {this.renderContent()}
          </div>
        </div>
      </nav>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Header);
