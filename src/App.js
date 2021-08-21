import React from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import store from './redux/configureStore';
import Navbar from './components/Navbar';
import Rockets from './pages/Rockets';
import Dragons from './pages/Dragons';
import Missions from './pages/Missions';
import MyProfile from './pages/MyProfile';
import {
  receiveRockets, receiveDragons, receiveMissions, receiveReservations,
} from './redux/api/api';
import './App.scss';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rockets: null,
      missions: null,
      dragons: null,
      reservations: null,
    };
  }

  componentDidMount() {
    if (this.props) {
      // eslint-disable-next-line react/prop-types
      const { receiveRockets } = this.props;
      const { rockets } = this.state;
      const presentRockets = rockets;
      const newRockets = receiveRockets();
      if (newRockets !== presentRockets) {
        this.setState(() => ({
          rockets: newRockets,
        }));
      }
    }
  }

  callDragons() {
    if (this.props) {
      // eslint-disable-next-line react/prop-types
      const { receiveDragons } = this.props;
      const { dragons } = this.state;
      const presentDragons = dragons;
      const newDragons = receiveDragons();
      if (newDragons !== presentDragons) {
        this.setState(() => ({
          dragons: newDragons,
        }));
      }
    }
  }

  callMissions() {
    if (this.props) {
      // eslint-disable-next-line react/prop-types
      const { receiveMissions } = this.props;
      const { missions } = this.state;
      const presentMissions = missions;
      const newMissions = receiveMissions();
      if (newMissions !== presentMissions) {
        this.setState(() => ({
          missions: newMissions,
        }));
      }
    }
  }

  callReservations() {
    if (this.props) {
      // eslint-disable-next-line react/prop-types
      const { receiveReservations } = this.props;
      const { reservations } = this.state;
      const presentReservations = reservations;
      const newReservations = receiveReservations();
      if (newReservations !== presentReservations) {
        this.setState(() => ({
          reservations: newReservations,
        }));
      }
    }
  }

  render() {
    const {
      rockets = null,
      missions = null,
      dragons = null,
      reservations = null,
    } = this.state;
    return (
      <div className="App">
        <Navbar />
        <Switch>
          <Route
            exact
            path="/"
            component={Rockets}
            rockets={rockets}
          />
          <Route
            exact
            path="/dragons"
            component={Dragons}
            rockets={dragons}
            call={this.callDragons}
          />
          <Route
            path="/missions"
            component={Missions}
            missions={missions}
            call={this.callMissions}
          />
          |
          <Route
            path="/my_profile"
            component={MyProfile}
            reservations={reservations}
            call={this.callReservations}
          />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  state,
});

export default connect(mapStateToProps, {
  store, receiveRockets, receiveDragons, receiveMissions, receiveReservations,
})(App);
