// SurveyNew shows SurveyForm and SurveyFormReview
import React, { Component } from "react";

import SurveyForm from "./SurveyForm";

class SurveyNew extends Component {
  render() {
    return (
      <div>
        <h1>Create a New Survey!</h1>
        <SurveyForm />
      </div>
    );
  }
}

export default SurveyNew;
