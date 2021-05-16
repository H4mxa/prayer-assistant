import { React, useState } from "react";
import { useForm } from "react-hook-form";
import { login } from "actions";
import { Redirect } from "react-router-dom";
import { useToasts } from "react-toast-notifications";
import onlyGuest from "Components/hoc/onlyGuest";

const Login = () => {
  const [redirect, setRedirect] = useState(false);
  const { register, handleSubmit } = useForm();
  const { addToast } = useToasts();

  const onLogin = (loginData) => {
    login(loginData).then(
      (_) => setRedirect(true),
      (errorMessage) =>
        addToast(errorMessage, {
          appearance: "error",
          autoDismiss: true,
          autoDismissTimeout: 3000,
        })
    );
  };

  if (redirect) {
    return <Redirect to="/" />;
  }

  return (
    <div className="auth-page">
      <div className="container has-text-centered">
        <div className="column is-4 is-offset-4">
          <h3 className="title has-text-grey">Login</h3>
          <p className="subtitle has-text-grey">Please login to proceed.</p>
          <div className="box">
            <figure className="avatar">
              <img
                src="https://source.unsplash.com/128x128/?placeholder,avatar"
                alt="Company Logo"
              />
            </figure>
            <form onSubmit={handleSubmit(onLogin)}>
              <div className="field">
                <div className="control">
                  <input
                    {...register("email")}
                    name="email"
                    className="input is-large"
                    type="email"
                    placeholder="Your Email"
                    autoComplete="email"
                  />
                </div>
              </div>
              <div className="field">
                <div className="control">
                  <input
                    {...register("password")}
                    name="password"
                    className="input is-large"
                    type="password"
                    placeholder="Your Password"
                    autoComplete="current-password"
                  />
                </div>
              </div>
              <button
                type="submit"
                className="button is-block is-info is-large is-fullwidth"
              >
                Sign In
              </button>
            </form>
          </div>
          <p className="has-text-grey">
            <a>Sign In With Google</a>&nbsp;
            <a href="/">Sign Up</a> &nbsp;·&nbsp;
            <a href="../">Need Help?</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default onlyGuest(Login);
