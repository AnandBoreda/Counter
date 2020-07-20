import React, { Component } from "react";

class Counter extends Component {
  render() {
    return (
      <div>
        <span className={this.getBadgeClasses()}> {this.formatCount()} </span>
        <button
          onClick={() => {
            this.props.onIncrement(this.props.counter);
          }}
          className="btn btn-secondary btn-sm mx-2 my-2"
        >
          Increment
        </button>
        <button
          className="btn btn-danger btn-sm"
          onClick={() => this.props.onDelete(this.props.counter.id)}
        >
          delete
        </button>
      </div>
    );
  }

  getBadgeClasses() {
    var classes = "badge m-2 badge-";

    if (this.props.counter.value > 10) {
      classes += "success";
      return classes;
    } else {
      classes += this.props.counter.value === 0 ? "warning" : "primary";
      return classes;
    }
  }

  formatCount() {
    var { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;