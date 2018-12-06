import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Header from "./Header";

const Landing = () => <h1>Landing</h1>;
const Dashboard = () => <h1>Dashboard</h1>;
const Profile = () => <h1>Profile</h1>;

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <BrowserRouter>
          <div className="container">
            <Route exact path="/" component={Landing} />
            <Route exact path="/dashboard" component={Dashboard} />
            <Route path="/profile" component={Profile} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
