import React from "react";
import './App.css';
import Posts from "./components/posts/posts.jsx";
import { Route, Redirect, Switch } from "react-router-dom";
import Authors from "./components/author/authors.jsx";
import NotFound from "./components/notfound";
import NavBar from "./components/navbar";
import Post from "./components/singlePost/SinglePost.jsx";
function App() {
  return (
    <React.Fragment>
      <NavBar />
      <main className="container">
      <Switch>
      <Route path="/authors/:id" component={Authors} />
      <Route path="/post/:id" component={Post} />
      <Route path="/" component={Posts} exact />
      <Route path="/not-found" component={NotFound} />
      <Redirect to="/not-found" />
      </Switch>
      </main>
    </React.Fragment>
  );
}

export default App;
