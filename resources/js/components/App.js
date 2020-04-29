import ReactDOM from 'react-dom';

import { BrowserRouter, Route, Switch } from 'react-router-dom'
import React, { Component } from 'react'
import Main from './Main'

class App extends Component {
  render () {
    return (
      <BrowserRouter>
        <div>
          <Main/>
        </div>
      </BrowserRouter>
    )
  }
}

export default App;

if (document.getElementById('app')) {
    ReactDOM.render(<App />, document.getElementById('app'));
}
