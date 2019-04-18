import React, { Component } from "react";
import { Router, Route, Link, browserHistory, IndexRoute } from "react-router";

import PostList from "./containers/post-list";
import PostForm from "./containers/post-form";

export class Routes extends Component {
  render() {
    return (
      <div>
        <Router history={browserHistory}>
          <Route path="/" component={PostList} />
          <Route path="create-post" component={PostForm} />
        </Router>
      </div>
    );
  }
}

export default Routes;
