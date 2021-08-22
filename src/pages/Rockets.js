import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import store from '../redux/configureStore';
import Displayer from '../components/Displayer';
import { getRockets } from '../redux/api/api';

function Rockets(props) {
  const [rocketsDisplay, setRocketsDisplay] = useState(null);
  const [calledRocket, setCalledRocket] = useState(null);

  useEffect(() => {
    const { rockets } = props;
    if (!calledRocket && rockets.length === 0) {
      setCalledRocket(true);
      props.getRockets();
    }
    if (rockets !== undefined && rockets !== rocketsDisplay) {
      setRocketsDisplay(rockets);
    }
  });

  const layout = (
    <div className="rockets">
      <Displayer target="rockets" rockets={rocketsDisplay} />
    </div>
  );
  return layout;
}

const mapStateToProps = (state) => ({
  rockets: state.rocketsReducer.rockets,
});

export default connect(mapStateToProps, { store, getRockets })(Rockets);
