// SurveyField contains logic to render a single
// label and text input
import React from "react";

export default ({ input, label, meta: { error, touched } }) => {
  return (
    <div className="form-group">
      <label>{label}</label>
      <input {...input} className="form-control" />
      {touched && error}
    </div>
  );
};
