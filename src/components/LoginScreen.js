import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const LoginScreen = () => {
  let navigate = useNavigate();
  const [username, setUsername] = useState("");

  return (
    <div className="text-center m-5-auto">
      <br />
      <h2 className="h">Sign in to us</h2>
      <form>
        <p>
          <label>Username</label>
          <br />
          <input
            type="text"
            name="first_name"
            required="required"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
        </p>
        <p>
          <label>Password</label>

          <br />
          <input type="password" name="password" required />
        </p>
        <p>
          
          <button
            id="sub_btn"
            type="submit"
            onClick={() => navigate("/homepage", { state: username })}
          >
            Login
          </button>
          
        </p>
      </form>
    </div>
  );
};

export default LoginScreen;
