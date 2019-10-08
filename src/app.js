import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class MyApp extends Component {
  render() {
    return <div>Hello World</div>;
  }
}

ReactDOM.render(<MyApp />, document.getElementById('app'));
