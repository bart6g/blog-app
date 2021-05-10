import React, { useState, useEffect } from "react";
import Button from "@material-ui/core/Button";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { auth } from "../../common/auth";
import { getAllBlogs } from "../../../redux/blog/blogActions";
import List from "./List";
const Wall = () => {
  let history = useHistory();
  const [wasLogged, setWasLogged] = useState(false);
  const { loggedIn } = useSelector((state) => state.userData);
  const dispatch = useDispatch();
  useEffect(() => {
    let path = "/wall";
    auth(setWasLogged, dispatch, history, path);
    dispatch(getAllBlogs());
  }, [loggedIn]);

  return (
    <div>
      {wasLogged ? (
        <List />
      ) : (
        <>
          <Button
            variant="contained"
            color="primary"
            onClick={() => history.push("/")}
          >
            Click here
          </Button>
          to continue
        </>
      )}
    </div>
  );
};

export default Wall;
