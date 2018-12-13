// SurveFormReview shows users their form inputs for review
import _ from "lodash";
import React from "react";
import { connect } from "react-redux";

import formFields from "./formFields";

const SurveyFormReview = ({ onCancel, formValues }) => {
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
    </div>
  );
};

function mapStateToProps(state) {
  return {
    formValues: state.form.surveyForm.values
  };
}

export default connect(mapStateToProps)(SurveyFormReview);
