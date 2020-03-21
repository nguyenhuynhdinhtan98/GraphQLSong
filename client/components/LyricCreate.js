import React, { Component } from "react";
import { graphql } from "react-apollo";
import gql from "graphql-tag";
import fetchSongs from "../query/fetchSong";
class LyricCreate extends Component {
  constructor(props) {
    super(props);
    this.state = { id: this.props.songId, content: "" };
  }
  onSubmit(event) {
    event.preventDefault();
    this.props
      .mutate({
        variables: { songId: this.state.id, content: this.state.content },
        refetchQueries: [{ query: fetchSongs }]
      })
      .then(() => this.setState({ content: "" }));
  }
  render() {
    return (
      <form onSubmit={this.onSubmit.bind(this)}>
        <div className="form-group">
          <label>Lyric content</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter content"
            value={this.state.content}
            onChange={event => this.setState({ content: event.target.value })}
          />
          <input type="submit" />
        </div>
      </form>
    );
  }
}
const mutation = gql`
  mutation AddLyricToSong($content: String, $songId: ID) {
    addLyricToSong(content: $content, songId: $songId) {
      id
      lyrics {
        id
        content
      }
    }
  }
`;
export default graphql(mutation)(LyricCreate);
