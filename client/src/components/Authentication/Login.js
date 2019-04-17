import React, { Component } from "react";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";

import { userLogin } from "../../actions/UserActions";

class Login extends Component {
  renderErrors = ({ error, touched }) => {
    if (touched && error) {
      return <div className="ui left pointing red inverted label">{error}</div>;
    }
  };

  renderInput = ({ input, id, label, meta, type }) => {
    const iconClass = `icon ${label === "Username" ? "user" : "lock"}`;
    const inp = <input id={id} type={type} {...input} />;

    if (meta.error && meta.touched) {
      return (
        <div
          id="formpop"
          data-tooltip={meta.error}
          data-position="bottom center"
          data-inverted=""
          className="field error"
        >
          <label htmlFor={id} className="ui black horizontal label">
            {label}{" "}
          </label>
          <div className="ui left icon input">
            {inp}
            <i className={iconClass} />
          </div>
        </div>
      );
    } else {
      return (
        <div className="field">
          <label htmlFor={id} className="ui black horizontal label">
            {label}{" "}
          </label>
          <div className="ui left icon input">
            {inp}
            <i className={iconClass} />
          </div>
        </div>
      );
    }
  };

  onSubmit = formValues => {
    console.log(formValues);
    this.props.userLogin(formValues);
  };

  render() {
    return (
      <form
        onSubmit={this.props.handleSubmit(this.onSubmit)}
        className="ui form error"
      >
        <div className="inline fields">
          <Field
            id="username"
            name="username"
            type="text"
            label="Username"
            component={this.renderInput}
          />

          <Field
            id="password"
            name="password"
            type="password"
            label="Password"
            component={this.renderInput}
          />

          <button className="ui button positive">Log In</button>
        </div>
      </form>
    );
  }
}

const validate = formValues => {
  const errors = {};
  if (!formValues.username) {
    errors.username = "Enter a user name";
  }
  if (!formValues.password) {
    errors.password = "Enter a password";
  }

  return errors;
};

const redForm = reduxForm({
  form: "LoginForm",
  validate: validate
})(Login);

const mapToProps = state => {
  return {};
};

export default connect(
  null,
  {
    userLogin
  }
)(redForm);
