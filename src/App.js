import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Rockets from './pages/Rockets';
import Dragons from './pages/Dragons';
import Missions from './pages/Missions';
import MyProfile from './pages/MyProfile';

import './App.scss';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Rockets} />
          <Route
            exact
            path="/dragons"
            component={Dragons}
          />
          <Route
            path="/missions"
            component={Missions}
          />
          |
          <Route
            path="/myprofile"
            component={MyProfile}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
