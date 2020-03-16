import React, { Component } from "react";
import gql from "graphql-tag";
import { compose, graphql } from "react-apollo";
import _ from "lodash";
import { Link } from "react-router-dom";
class SongList extends Component {
  getData() {
    return this.props.data.songs.map(({ id, title }) => {
      return (
        <li className="list-group-item" key={id}>
          {title}
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
const querySong = gql`
  {
    songs {
      id
      title
      lyrics {
        content
      }
    }
  }
`;

export default graphql(querySong)(SongList);
