import React, { Component } from "react";
import StripeCheckout from "react-stripe-checkout";

class Payments extends Component {
  render() {
    return (
      <StripeCheckout
        amount={500} // cents
        token={token => console.log(token)}
        stripeKey={process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY}
      >
        <p className="dropdown-item">Payments</p>
      </StripeCheckout>
    );
  }
}

export default Payments;
