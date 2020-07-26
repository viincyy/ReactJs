import React, { PureComponent } from "react";

export default class Pure extends PureComponent {
  render() {
    console.log("render - Pure");
    return (
      <div>
        <h3 className="title">Pure</h3>
      </div>
    );
  }
}
