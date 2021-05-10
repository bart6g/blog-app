import React from "react";
import { NavContainer, NavLinks, NavWrapper } from "./navElements";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/user/userActions";
import { NavLink } from "react-router-dom";
import { useHistory } from "react-router-dom";
import Button from "@material-ui/core/Button";
const Navbar = () => {
  const dispatch = useDispatch();
  let history = useHistory();
  const handleLogout = () => {
    localStorage.clear();
    dispatch(logout());
    history.push("/");
  };
  return (
    <NavContainer>
      <NavWrapper>
        <NavLinks>
          <li>
            <NavLink to="/new-post" exact>
              Add post
            </NavLink>
          </li>
          <li>
            <NavLink to="/wall" exact>
              Wall
            </NavLink>
          </li>
        </NavLinks>
        <Button variant="contained" onClick={() => handleLogout()}>
          Logout
        </Button>
      </NavWrapper>
    </NavContainer>
  );
};

export default Navbar;
