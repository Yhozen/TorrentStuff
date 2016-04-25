import React from 'react';

Resolutions = new Mongo.Collection("resolutions");


export default class App extends React.Component {
  render() {
    return (
      <div>
        <h1> Hello world from react </h1>
        <form className="submit">
          <input
                type="text"
                ref="resolution"
                placeholder="nueva doc" />
        </form>
      </div>
    )
  }
}
