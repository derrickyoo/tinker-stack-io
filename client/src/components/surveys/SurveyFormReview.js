// SurveFormReview shows users their form inputs for review
import React from "react";

const SurveyFormReview = ({ onCancel }) => {
  return (
    <div>
      <h4>Please Confirm Your Entries!</h4>

      <button type="button" className="btn btn-warning" onClick={onCancel}>
        Back
      </button>
    </div>
  );
};

export default SurveyFormReview;
