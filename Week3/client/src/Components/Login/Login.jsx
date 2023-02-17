import "./login.css";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { loginUser } from "../../redux/apiRequest";
import NavBar from "../NavBar/NavBar";
// import axios from "axios";
// import dotenv from  'dotenv'

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const userLogin = {
      email: email,
      password: password,
    };
    
    loginUser(userLogin, dispatch, navigate);
    console.log("123", process.env.REACT_APP_URL_LOCALHOST);
  };
  return (
    <div className="login">
      <NavBar />
    <div className="ff">

      <section className="login-container">
        <div className="login-title"> Log in</div>
        <form>
          <label>USERNAME</label>
          <input
            type="text"
            placeholder="Enter your username"
            onChange={(e) => setEmail(e.target.value)}
          />
          <label>PASSWORD</label>
          <input
            type="password"
            placeholder="Enter your password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" onClick={handleSubmit}>
            {" "}
            Continue{" "}
          </button>
          {/* </form> */}
        </form>
        <div className="login-register"> Don't have an account yet? </div>
        <Link className="login-register-link" to="/register">
          Register one for free{" "}
        </Link>
      </section>
    </div>
    </div>
  );
};

export default Login;
