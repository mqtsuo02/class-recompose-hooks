import React, { Component } from "react";
import Counter from "../Components/Counter";

class ClassContainer extends Component {
  constructor() {
    super();
    this.state = { count: 0, isMounted: false };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ count: this.state.count + 1 });
  }

  componentDidMount() {
    this.setState({ isMounted: true });
  }

  render() {
    return (
      <Counter
        label="Class"
        count={this.state.count}
        isMounted={this.state.isMounted}
        handleClick={this.handleClick}
      />
    );
  }
}

export default ClassContainer;
