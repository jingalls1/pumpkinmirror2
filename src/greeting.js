import React from "react";

export default class Greeting extends React.Component {
    constructor(props) {
        super(props);
        this.state = {message: ""};
    }

    componentDidMount() {
        this.greet();
        this.interval = setInterval(() => {this.greet()}, 60000);
    }
    componentWillUnmount() {
        clearInterval(this.interval);
    }


    greet = () => {
        let d = new Date();
        let hours = d.getHours()
        if (hours < 12) {
            this.setState({message: "Good Morning, Pumpkin Court"})
        } else if (hours >= 12 && hours < 17) {
            this.setState({message: "Good Afternoon, Pumpkin Court"})
        } else {
            this.setState({message: "Good Evening, Pumpkin Court"})
        }
    }

    render() {
        return(
            <div>
                <div className="greeting">&nbsp;&nbsp;&nbsp;{this.state.message}</div>
            </div>
        )
    }
}
