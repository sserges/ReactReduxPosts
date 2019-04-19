import React, { Component } from "react";
import { Link } from "react-router";

class PostForm extends Component {
  render() {
    return (
      <div>
        <h1>Nouveau Post</h1>
        <form>
          <div className="form-group">
            <label>Titre</label>
            <input className="form-control" type="text" />
            <div />
          </div>
          <div className="form-group">
            <label>Description</label>
            <textarea className="form-control" />
            <div />
          </div>
          <div className="form-group">
            <label>Auteur</label>
            <input className="form-control" type="text" />
            <div />
          </div>
          <Link to={"/"} className="button_space">
            <button className="btn btn-danger">Retour</button>
          </Link>
          <button type="submit" className="btn btn-primary">
            Créer
          </button>
        </form>
      </div>
    );
  }
}

export default PostForm;
