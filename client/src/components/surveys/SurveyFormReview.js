// SurveFormReview shows users their form inputs for review
import _ from "lodash";
import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import formFields from "./formFields";
import * as actions from "../../actions";

const SurveyFormReview = ({ onCancel, formValues, submitSurvey, history }) => {
  const reviewFields = _.map(formFields, ({ label, name }) => {
    return (
      <div key={name}>
        <label>{label}</label>
        <div>{formValues[name]}</div>
      </div>
    );
  });

  return (
    <div>
      <h4>Please Confirm Your Entries!</h4>
      {reviewFields}
      <button type="button" className="btn btn-warning" onClick={onCancel}>
        Back
      </button>
      <button
        onClick={() => submitSurvey(formValues, history)}
        className="btn btn-success float-right"
      >
        Send Survey
      </button>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    formValues: state.form.surveyForm.values
  };
}

export default connect(
  mapStateToProps,
  actions
)(withRouter(SurveyFormReview));
