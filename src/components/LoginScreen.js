import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Login.css";

const LoginScreen = () => {
  let navigate = useNavigate();
  // const [username, setUsername] = useState("");

  // const adminUser = {
  //   username: "admin",
  //   password: "password",
  // };

  const [values, setValues] = useState({
    // username: "",
    email: "",
    password: "",
  });

  // const [errors, setErrors] = useState({});
  const [message, setMessage] = useState(null);

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // setErrors(validate(values));
    setMessage(null);
    // };

    //

    if (!values.email || !values.password) {
      setMessage("Email and Password required");
    } else {
      axios
        .post("http://restapi.adequateshop.com/api/authaccount/login", values)
        .then((response) => {
          console.log(response);
          setMessage(response.data.message);
          if (response.data.message == "success") {
            navigate("/homepage", {
              state: {
                username: response.data.data.Name,
                /* password: password */
              },
            });
          }
        });
    }
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
            // name="username"
            name="email"
            required="required"
            // value={values.username}
            value={values.email}
            onChange={handleChange}
          />
        </p>
        <p>
          {/* <p>{errors.username}</p> */}

          {values.username && <div>{values.username}</div>}

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
        {message && <div className="error">{message}</div>}
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
