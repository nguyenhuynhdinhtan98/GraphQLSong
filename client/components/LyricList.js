import React, { Component } from "react";

export default class LyricList extends Component {
  getData() {
    return this.props.lyrics.map(({ id, content }) => {
      return (
        <li className="list-group-item collection-item" key={id}>
          {content}
          <i className="material-icons">thumb_up</i>
        </li>
      );
    });
  }

  render() {
    return (
      <div>
        <div className="card">
          <ul className="list-group list-group-flush">{this.getData()}</ul>
        </div>
      </div>
    );
  }
}
