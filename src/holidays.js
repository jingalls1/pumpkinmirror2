import React from "react";
import { holidayData } from "./holidayData.js";
import TextLoop from "react-text-loop";

export default class Holiday extends React.Component {
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

  datef(){
    let d = new Date();
    let month = d.getMonth() + 1;
    let day = d.getDate();
    let formattedDate = `holList Updated: ${month}/${day} at ${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`;
    return formattedDate;
  }

  holidayHandler() {
    let hols = holidayData;

    let d = new Date();
    let month = d.getMonth() + 1;
    let day = d.getDate();
    let formattedDate = `${month}/${day}`;

    for (let i = 0; i < hols.length; i++) {
      if (hols[i].date === formattedDate) {
        let h = hols[i].holiday;
        let h2 = h.split(", ");
        let h3 = h2.map(i => "Happy " + i + "!");
        if (h3.length > 1) {
          let h4 = h3.map(i => <tr>{i}</tr>);
          return h4;
        } else {
          return h3;
        }
      }
    }
  }

  animatedHols() {
    let hols = holidayData;

    let d = new Date();
    let month = d.getMonth() + 1;
    let day = d.getDate();
    let formattedDate = `${month}/${day}`;

    for (let i = 0; i < hols.length; i++) {
      if (hols[i].date === formattedDate) {
        let h = hols[i].holiday;
        let h2 = h.split(", ");
        let h3 = h2.map(i => "Happy " + i + "!");
        let h4 = h3.map(i => <tr>{i}</tr>);
        return <TextLoop interval={2200}>{h4}</TextLoop>
      }
    }
  }

  render() {
    //console.log(holidayData);
    return (
      <div>
        <table>
          <br style={{lineHeight: "2"}}/>
          <div style={{ fontSize: "3em" }}>        {this.animatedHols()}</div>
        </table>
      {/*<div>{this.datef()}</div>*/}
      </div>
    );
  }
}
