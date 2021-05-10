import React from "react";
import { useSelector } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/nav/Navbar";
import Home from "./components/pages/home/Home";
import NewBlogPage from "./components/pages/new-blog/NewBlogPage";
import Wall from "./components/pages/wall/Wall";

const App = () => {
  const { loggedIn } = useSelector((state) => state.userData);
  return (
    <Router>
      {loggedIn ? <Navbar /> : null}
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/new-post" component={NewBlogPage} />
        <Route path="/wall" component={Wall} />
      </Switch>
    </Router>
  );
};

export default App;
