import React from 'react';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false
    };
  }

  //handler goes here
  handleClick = () => {
    this.setState({
      clicked: !this.state.clicked
    });
  }

  render() {
    return (
      <div>
        <p>Greetings!</p>
        <button onClick={this.handleClick}>
          {this.state.clicked ? "thanks" : "click me"}
        </button>
      </div>
    );
  }
}
