import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  increment() {
    // this.setState(
    //   {
    //     count: this.state.count + 1,
    //   },
    //   () => {
    //     console.log("Callback value : ", this.state.count);    // callback console log statement
    //   }
    // );

    this.setState((prev, props) => (     // we don't need to () for "prev"{variable as args} unless, we pass "props"
        {
            count : prev.count + 1
        }
    ),
    () => {console.log("Callback function using prevState : ", this.state.count)})

    // console.log(this.state.count);  // Synchronous console log statement
  }

  decrement() {
    this.setState(
      {
        count: this.state.count - 1,
      },
      () => {
        console.log("Callback value : ", this.state.count);
      }
    );

    console.log(this.state.count);
  }

  incrementFive() {
    this.increment();
    this.increment();
    this.increment();
    this.increment();
    this.increment();
  }

  decrementFive() {
    this.setState({
        count : this.state.count - 5
    },
    () => {console.log("Callback value after direct 5 dec. : ", this.state.count)})
  }

  render() {
    return (
      <div>
        <h2>count value = {this.state.count}</h2>
        <button onClick={() => this.increment()}>Increase</button> &nbsp;
        <button onClick={() => this.decrement()}>Decrease</button>
        <br />
        <br />
        <button onClick={() => this.incrementFive()}>Increase 5</button> &nbsp;
        <button onClick={() => this.decrementFive()}>Decrease 5</button>
      </div>
    );
  }
}

export default Counter;
