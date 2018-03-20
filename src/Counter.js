import React, { Component } from "react";
import DownvoteButton from "./DownvoteButton";
import UpvoteButton from "./UpvoteButton";

import "./Counter.css";

class Counter extends Component {
  constructor() {
    super();
    this.state = {
      count: 1
    };
    this.increaseCount = this.increaseCount.bind(this);
    this.decreaseCount = this.decreaseCount.bind(this);
  }

  render() {
    return (
      <div id="main-counter">
        <DownvoteButton subtract={this.decreaseCount}/>
        {this.state.count}
        <UpvoteButton add={this.increaseCount}/>
      </div>
    );
  }

  increaseCount() {
    this.setState({ count: this.state.count + 1 });
  }

  decreaseCount() {
    this.setState({ count: this.state.count - 1 });
  }
}

export default Counter;
