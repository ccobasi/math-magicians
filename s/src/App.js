import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Calculator from './components/Calculator';
import Home from './components/Home';
import Quotes from './components/Quotes';
import Navbar from './components/Navbar';
import './index.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/calculator" component={Calculator} />
            <Route path="/quotes" component={Quotes} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
