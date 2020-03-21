import React, { Component } from "react";
import { graphql } from "react-apollo";
import findSong from "../query/findSong";
import { Link } from "react-router-dom";
import LyricList from "./LyricList";
import LyricCreate from "./LyricCreate";
class SongDetail extends Component {
  render() {
    const { song } = this.props.data;
    if (!song) {
      return <div>Loading...</div>;
    }

    return (
      <div>
        <Link to="/">Back</Link>
        <h1>Title: {song.title}</h1>
        <LyricList lyrics={song.lyrics} />
        <LyricCreate songId={song.id} />
      </div>
    );
  }
}

export default graphql(findSong, {
  options: props => {
    return { variables: props.match.params, awaitRefetchQueries: true };
  }
})(SongDetail);
