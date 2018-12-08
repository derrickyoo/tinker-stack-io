import React, { Component } from "react";
import StripeCheckout from "react-stripe-checkout";
import { connect } from "react-redux";
import * as actions from "../actions";

class Payments extends Component {
  render() {
    return (
      <StripeCheckout
        name="TinkerStack.io"
        description="$5 for credits, etc."
        amount={500}
        token={token => this.props.handleStripeToken(token)}
        stripeKey={process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY}
      >
        <button className="dropdown-item">Payments</button>
      </StripeCheckout>
    );
  }
}

export default connect(
  null,
  actions
)(Payments);