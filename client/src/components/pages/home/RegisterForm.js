import React, { useState } from "react";
import { Form } from "./homeElements";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { useSelector, useDispatch } from "react-redux";
import { clearRegisterForm, registerUser } from "../../../redux";
const RegisterForm = ({ handleFormChange }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordRepeat, setPasswordRepeat] = useState("");
  const dispatch = useDispatch();
  const { msg, registerSuccess } = useSelector((state) => state.userData);

  const handleRegisteredForm = (e) => {
    //changes form to login and clean register state
    handleFormChange(e);
    dispatch(clearRegisterForm());
  };

  return (
    <Form registerSuccess={registerSuccess}>
      <h2>Welcome to BlogApp</h2>
      <span className="msg">{msg}</span>
      {!registerSuccess ? (
        <>
          <p>
            Already have account?
            <button className="toggle" onClick={(e) => handleFormChange(e)}>
              Sign In
            </button>
          </p>

          <TextField
            id="outlined-basic"
            label="Name"
            variant="outlined"
            className="login"
            onChange={(e) => setName(e.target.value)}
          />
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
          <TextField
            id="outlined-basic"
            label="Repeat password"
            variant="outlined"
            className="login"
            onChange={(e) => setPasswordRepeat(e.target.value)}
          />
          <Button
            variant="contained"
            color="primary"
            className="submit"
            onClick={() =>
              dispatch(registerUser({ name, email, password, passwordRepeat }))
            }
          >
            Register
          </Button>
        </>
      ) : (
        <>
          <p>Click below to continue</p>
          <Button
            variant="contained"
            color="primary"
            className="submit"
            onClick={(e) => handleRegisteredForm(e)}
          >
            Click here
          </Button>
        </>
      )}
    </Form>
  );
};

export default RegisterForm;
