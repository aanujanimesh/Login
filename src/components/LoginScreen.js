import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const LoginScreen = () => {
  let navigate = useNavigate();
  // const [username, setUsername] = useState("");

  const adminUser = {
    username: "admin",
    password: "password",
  };

  const [values, setValues] = useState({
    username: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors(validate(values));
  };

  const validate = (values) => {
    const error = {};

    if (
      values.username === adminUser.username &&
      values.password === adminUser.password
    ) {
      navigate("/homepage", {
        state: { username: values.username /*password: password*/ },
      });
    }

    if (!values.username) {
      error.username = "Username is required";
    } else if (values.username !== adminUser.username) {
      error.username = "Username is Incorrect";
    }

    if (!values.password) {
      error.password = "Password is required";
    } else if (values.password !== adminUser.password) {
      error.password = "Password is Incorrect";
    }
    return error;
  };

  return (
    <div className="text-center m-5-auto">
      <br />
      <h2 className="h">Sign in to us</h2>
      <form onSubmit={handleSubmit}>
        <p>
          <label>Username</label>
          <br />
          <input
            type="text"
            name="username"
            required="required"
            value={values.username}
            onChange={handleChange}
          />
        </p>
        <p>
          <p>{errors.username}</p>
          <label>Password</label>

          <br />
          <input
            type="password"
            name="password"
            required
            value={values.password}
            onChange={handleChange}
          />
        </p>
        <p>
          <button
            id="sub_btn"
            type="submit"
            // onClick={() => navigate("/homepage", { state: username })}
          >
            Login
          </button>
        </p>
      </form>
    </div>
  );
};

export default LoginScreen;
