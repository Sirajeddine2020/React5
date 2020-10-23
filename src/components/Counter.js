import React from 'react'

export default class Counter extends React.Component {
    constructor(props) {
      super(props);
      this.state = {date: new Date(), timerID:0};
    }
  
    componentDidMount() {
      this.setState({timerID : setInterval(
        () => this.tick(),
        1000
      )
    }); 
    }

  
    componentWillUnmount() {
      clearInterval(this.timerID);
    }
  
    tick() {
      this.setState({
        date: new Date()
              });
      this.setState({
        timerID: this.state.timerID+1 
      });       
    }
  
    render() {
      return (
        <div>
          <h1 style={{  color:'ButtonShadow'}}>Hello, world!</h1>
          <h2 className="clock">It is {this.state.date.toLocaleTimeString()}.</h2>
          <h2 className="compteur" style={{ backgroundColor:'green', textDecorationStyle:'dotted', textDecorationColor:'rebeccapurple', color: 'chartreuse'}}>It has been { this.state.timerID } seconds since the mounting of this component.</h2> 
        </div>
      );
    }

    
  }

  
