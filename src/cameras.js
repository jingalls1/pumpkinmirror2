import React from 'react';

const cam1 = 'http://ie.trafficland.com/v1.0/5433/full?system=oregondot&pubtoken=555f6f5a8b79d6297d65ecff8777530bca707bef48442982bfcb7cfa3fbabd7a&refreshRate=2000'
const cam2 = 'http://ie.trafficland.com/v1.0/7839/full?system=oregondot&pubtoken=3739d97c5b382ca19c58ffd6d7452a5078d403fe44a2f824537d6cbd122916df&refreshRate=2000'
const loaded = 'https://ie.trafficland.com/v2.0/7112/huge?system=weatherbug-stream&pubtoken=5ddae529d92304f3c68e0fd44b6b2ae583ba2d94c4e452d22380371c589bc68f&refreshRate=2000'

export default class Cameras extends React.Component{
    constructor(props){
        super(props)
        this.state={url:cam1+'#'+new Date().getTime(), url2:cam2, loaded:loaded, num:1}
    }

    componentDidMount() {
        this.interval = setInterval(() => this.setState({ time: Date.now(), url: cam1 + '&rand=' + new Date().getTime(),url2: cam2 + '&rand=' + new Date().getTime(), num:this.state.num+1}), 1000);


    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    hello() {
        return <img src={this.state.url} alt="cam1" height="150" width="190" style={{position: "absolute", zIndex:1}}/>
    }
    cam2func(){
        return <img src={this.state.url2} alt="cam2" height="150" width="190" style={{ position: "absolute", zIndex: 1, marginLeft:"190px" }} />
    }

    render(){
        return(
            <div>
                {/*{this.hello()}
                {this.cam2func()}*/}
            </div>
        )
    }
}
