import React from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import store from './redux/configureStore';
import Navbar from './components/Navbar';
import Books from './pages/Books';
import Categories from './pages/Categories';
import { getBooks } from './redux/api/api';
import './App.scss';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    if (this.props) {
      // eslint-disable-next-line react/prop-types
      const { getBooks } = this.props;
      getBooks();
    }
  }

  render() {
    return (
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Books} />
          <Route path="/categories" component={Categories} />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  state,
});

export default connect(mapStateToProps, { store, getBooks })(App);
