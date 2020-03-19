import React, { Component } from "react";
import gql from "graphql-tag";
import { compose, graphql } from "react-apollo";
import _ from "lodash";
import { Link } from "react-router-dom";
import query from "../query/fetchSong";
class SongList extends Component {
  onSongDelete(id) {
    this.props
      .mutate({ variables: { id } })
      .then(() => this.props.data.refetch());
  }
  getData() {
    return this.props.data.songs.map(({ id, title }) => {
      return (
        <li className="list-group-item" key={id}>
          <Link>{title}</Link>
          <i className="material-icons" onClick={() => this.onSongDelete(id)}>
            delete
          </i>
        </li>
      );
    });
  }

  render() {
    if (this.props.data.loading) {
      return <div>Loading...</div>;
    }

    return (
      <div>
        <div className="card">
          <ul className="list-group list-group-flush">{this.getData()}</ul>
        </div>
        <Link to="/song/create" className="btn-floating btn-large red right">
          <i className="material-icons">add</i>
        </Link>
      </div>
    );
  }
}
const mutation = gql`
  mutation DeleteSong($id: ID) {
    deleteSong(id: $id) {
      id
    }
  }
`;

export default graphql(mutation)(graphql(query)(SongList));
