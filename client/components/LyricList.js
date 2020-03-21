import React, { Component } from "react";
import { compose, graphql } from "react-apollo";
import gql from "graphql-tag";
import query from "../query/fetchSong";
class LyricList extends Component {
  onLike(id) {
    this.props.mutate({
      variables: { id }
    });
  }
  getData() {
    return this.props.lyrics.map(({ id, content, likes }) => {
      return (
        <li className="list-group-item collection-item" key={id}>
          {content} - {likes}
          <i className="material-icons" onClick={() => this.onLike(id)}>
            thumb_up
          </i>
        </li>
      );
    });
  }

  render() {
    console.log(this.props.lyrics);
    return (
      <div>
        <div className="card">
          <ul className="list-group list-group-flush">{this.getData()}</ul>
        </div>
      </div>
    );
  }
}
const mutations = gql`
  mutation LikeLyric($id: ID) {
    likeLyric(id: $id) {
      id
      likes
      content
    }
  }
`;

export default graphql(mutations)(LyricList);
