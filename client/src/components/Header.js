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
            <a
              href="/api/logout"
              className="btn btn-outline-success my-2 my-sm-0"
            >
              Sign out
            </a>
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
            href="/"
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
            <div className="navbar-nav mr-auto">
              <a className="nav-link" href="/">
                Home
              </a>
              <a className="nav-link" href="/">
                Link
              </a>
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
              <a className="nav-link disabled" href="/">
                Pricing
              </a>
            </div>
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
