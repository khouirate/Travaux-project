import React from "react";
import { Component } from "react";
import { Route, NavLink, HashRouter } from "react-router-dom";
import Home from "./components/home/home";
import Story from "./components/stories/stories";
import Comment from "./components/comments/comment";
import "./App.css";

class App extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <h1>Hacker news</h1>
          <ul className="header">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/stories">Stories</NavLink>
            </li>
            <li>
              <NavLink to="/past">Comments</NavLink>
            </li>
          </ul>
          <div className="content">
            <Route exact path="/" component={Home} />
            <Route path="/stories" component={Story} />
            <Route path="/past" component={Comment} />
          </div>
        </div>
      </HashRouter>
    );
  }
}

export default App;
