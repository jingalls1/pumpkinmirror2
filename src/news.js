import React from "react";
import axios from "axios";
import TextLoop from "react-text-loop";
const newsAPI =
  "https://newsapi.org/v2/top-headlines?" +
  "country=us&" +
  "apiKey=fe80a73d44b04fd2a742a3e5c35506e2";

export default class News extends React.Component {
  constructor(props) {
    super(props);
    this.state = { news: [], i: 6000 };
  }
  componentDidMount() {
    this.fetcher()
    this.interval = setInterval(() => {this.fetcher()}, 600000)
  }
  fetcher() {
    axios.get(newsAPI).then(res => this.setState({ news: res.data.articles }));
    let d = new Date();
    console.log(`NEWS updates: ${d.getHours()}:${d.getMinutes()}`)
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }

  shiftArr(arr, n) {
    var i = arr.length - n;
    var front = arr.slice(0, i);
    var back = arr.slice(i);
    return back.concat(front);
  }

  newsHandler = () => {
    if (this.state.news.length < 1) {
      return <div>&nbsp;</div>;
    } else {
      let arrTest = [];
      let titleArr = [];
      //console.log(titleArr);
      //console.log(this.state.news.length)
      for (let i = 0; i < 10; i++) {
        titleArr.push(`${this.state.news[i].title}`);
        arrTest.push(
          <div className="Row" key={i}>

            <div className="Cell">

              <div style={{ fontFamily: "Calibri", fontSize: "1.5em" }}>
                <img src="https://i.imgur.com/KXyavaT.png" height="20" alt="news" />&nbsp;&nbsp;{this.state.news[i].title}
              </div>
            </div>
          </div>
        );
      }
      return (
        <div className="TableCenter">
           <div className="Row"> {/*<h2
            style={{
              textAlign: "left",
              marginLeft: "25%",
              textDecoration: "underline"
            }}

          >
            News
          </h2>*/}</div>
          {/*arrTest.map((value, index) => {
            return <TextLoop interval={1000}>{value}</TextLoop>;
          })*/}
          <TextLoop interval={this.state.i}>{this.shiftArr(arrTest, 3)}</TextLoop>
          <br/>
          <TextLoop interval={this.state.i}>{this.shiftArr(arrTest, 2)}</TextLoop>
          <br/>
          <TextLoop interval={this.state.i}>{this.shiftArr(arrTest, 1)}</TextLoop>
          <br/>

          <TextLoop interval={this.state.i}>{arrTest}</TextLoop>
        </div>
      );
    }
  };

  render() {
    return <div>{this.newsHandler()}</div>;
  }
}
