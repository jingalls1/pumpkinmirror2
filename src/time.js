import React from "react";

export default class Time extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.interval = setInterval(
      () => this.setState({ time: Date.now() }),
      1000
    );
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }

  secondsFunct = () => {};

  zeroFunc = num => {
    if (num < 10) {
      let string = num.toString();
      string = 0 + string;
      return string;
    } else return num;
  };

  dateFunc2 = () => {
    let d = new Date();
    let hours = d.getHours();
    let minutes = d.getMinutes();
    let secs = d.getSeconds();
    if (hours <= 12) {
      return (
        <span>
          <span>Portland Time</span>
          <div style={{ fontWeight: "bold", fontSize: "6em" }}>
            {hours}:{this.zeroFunc(minutes)}:
            <span style={{ fontSize: ".5em" }}>
              {this.zeroFunc(secs)}&nbsp;am
            </span>
          </div>
        </span>
      );
    } else {
      let hours2 = hours - 12;
      return (
        <span>
          <span style={{fontSize: "1.2em"}}>Portland Time:</span>
          <div style={{ fontWeight: "bold", fontSize: "6em" }}>
            {hours2}:{this.zeroFunc(minutes)}:
            <span style={{ fontSize: ".5em" }}>
              {this.zeroFunc(secs)}&nbsp;pm
            </span>
          </div>
        </span>
      );
    }
  };


  render() {
    return (
      <div>
        <div>{this.dateFunc2()}</div>
      </div>
    );
  }
}

/*
  componentDidMount() {
    this.interval = setInterval(
      () => this.setState({ time: Date.now() }),
      1000
    );
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }

  dateFunc = () => {
    let d = new Date();
    let hours = d.getHours();
    let minutes = d.getMinutes();
    let secs = d.getSeconds();
    let hours2 = 0;
    if (hours > 12) {
      hours2 = hours - 12;
    }
    return (
      <span>
        {hours} and {minutes} and {secs}
      </span>
    );
  };
  */
