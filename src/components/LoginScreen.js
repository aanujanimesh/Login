import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";

const LoginScreen = () => {
  return (
    <div className="text-center m-5-auto">
      <br />
      <h2 className="h">Sign in to us</h2>
      <form>
        <p>
          <label>Username or email address</label>
          <br />
          <input type="text" name="first_name" required />
        </p>
        <p>
          <label>Password</label>

          <br />
          <input type="password" name="password" required />
        </p>
        <p>
          <Link to="/homepage">
            <button id="sub_btn" type="submit">
              Login
            </button>
          </Link>
        </p>
      </form>
    </div>
  );
};

export default LoginScreen;
