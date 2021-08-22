import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import store from '../redux/configureStore';

function MyProfile(props) {
  const [rocketsDisplay, setRocketsDisplay] = useState(null);
  const [dragonsDisplay, setDragonsDisplay] = useState(null);
  const [missionsDisplay, setMissionsDisplay] = useState(null);

  useEffect(() => {
    const { reservations } = props;
    console.log(reservations);
    const { rockets, dragons, missions } = reservations;
    setRocketsDisplay(rockets);
    setDragonsDisplay(dragons);
    setMissionsDisplay(missions);
  });

  const Group = (data) => {
    const { group, title } = data;
    return (
      <div className="reservation">
        <h3 className="reservation-table-title">{group}</h3>
        <h5 className="reservation-item-name">{title}</h5>
      </div>
    );
  };

  const layout = (
    <div>
      <h1>Missions</h1>
      { missionsDisplay ? <Group data={missionsDisplay} /> : null }
      { rocketsDisplay ? <Group data={rocketsDisplay} /> : null }
      { dragonsDisplay ? <Group data={dragonsDisplay} /> : null }
    </div>
  );

  return layout;
}

const mapStateToProps = (state) => ({
  reservations: state.reservationsReducer.reservations,
});

export default connect(mapStateToProps, { store })(MyProfile);
