import React, { Component } from "react";

import PostContent from "../components/post-content";

class Post extends Component {
  render() {
    return (
      <div>
        Post numéro {this.props.params.id}
        <PostContent />
      </div>
    );
  }
}

export default Post;
