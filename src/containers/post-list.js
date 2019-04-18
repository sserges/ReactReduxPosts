import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { readAllPost } from "../actions/index";

class PostList extends Component {
  componentWillMount() {
    this.props.readAllPost();
  }

  render() {
    console.log(this.props.posts);
    return (
      <div>
        <h1>Liste des posts</h1>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    posts: state.posts
  };
};

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators({ readAllPost }, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostList);
