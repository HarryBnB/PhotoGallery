import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      view: []
    }
  }

  render() {
    return (
    <div>Render</div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));