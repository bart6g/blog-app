import React, { useState, useEffect } from "react";
import { Form } from "./homeElements";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { useSelector, useDispatch } from "react-redux";
import { loginUser } from "../../../redux/user/userActions";

const LoginForm = ({ handleFormChange }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { msg, loggedIn, token, user } = useSelector((state) => state.userData);

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(loginUser({ email, password }));
  };

  useEffect(() => {
    if (loggedIn) {
      localStorage.setItem("x-auth-token", token);
      localStorage.setItem("user", JSON.stringify(user));
    }
  }, [loggedIn]);

  return (
    <Form>
      <h2>Welcome to BlogApp</h2>
      <p>
        Are you new?
        <button className="toggle" onClick={(e) => handleFormChange(e)}>
          Sign Up
        </button>
        <span className="msg">{msg}</span>
      </p>
      <TextField
        id="outlined-basic"
        label="Email"
        variant="outlined"
        className="login"
        onChange={(e) => setEmail(e.target.value)}
      />
      <TextField
        id="outlined-basic"
        label="Password"
        variant="outlined"
        className="login"
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button
        variant="contained"
        color="primary"
        className="submit"
        onClick={(e) => handleLogin(e)}
      >
        Login
      </Button>
    </Form>
  );
};

export default LoginForm;
