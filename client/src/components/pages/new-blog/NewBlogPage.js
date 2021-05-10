import React, { useState, useEffect } from "react";
import { BlogContainer } from "./blogElements";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { auth } from "../../common/auth";
import Button from "@material-ui/core/Button";
import NewBlogForm from "./NewBlogForm";
const NewBlogPage = () => {
  const [wasLogged, setWasLogged] = useState(false);
  const { loggedIn } = useSelector((state) => state.userData);
  const dispatch = useDispatch();
  let history = useHistory();
  useEffect(() => {
    let path = "/new-post";
    auth(setWasLogged, dispatch, history, path);
  }, [loggedIn]);
  return (
    <BlogContainer>
      {wasLogged ? (
        <NewBlogForm />
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
    </BlogContainer>
  );
};

export default NewBlogPage;
