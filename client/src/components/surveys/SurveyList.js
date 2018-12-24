import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchSurveys } from "../../actions/";

class SurveyList extends Component {
  componentDidMount() {
    this.props.fetchSurveys();
  }

  renderSurveys() {
    return this.props.surveys.map(survey => {
      return (
        <div className="card mb-2" key={survey._id}>
          <div className="card-body">
            <span>{survey.title}</span>
            <p>{survey.body}</p>
            <p>Sent On: {new Date(survey.dateSent).toLocaleDateString()}</p>

            <a href="/" className="card-link">
              Yes: {survey.yes}
            </a>
            <a href="/" className="card-link">
              No: {survey.no}
            </a>
          </div>
        </div>
      );
    });
  }

  render() {
    return <div>{this.renderSurveys()}</div>;
  }
}

function mapStateToProps({ surveys }) {
  return { surveys };
}

export default connect(
  mapStateToProps,
  { fetchSurveys }
)(SurveyList);
