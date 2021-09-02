import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

const Group = (data) => {
  const items = data.data;
  return items.map((g) => (
    <div key={g.title} className="reservation">
      <h5 className="reservation-item-name">{g}</h5>
    </div>
  ));
};

function MyProfile() {
  const [rocketsDisplay, setRocketsDisplay] = useState(null);
  const [dragonsDisplay, setDragonsDisplay] = useState(null);
  const [missionsDisplay, setMissionsDisplay] = useState(null);
  const reservations = useSelector((state) => state.reservationsReducer.reservations);

  useEffect(() => {
    const { rockets, dragons, missions } = reservations;
    if (rockets.length > 0) {
      setRocketsDisplay(rockets);
    }
    if (dragons.length > 0) {
      setDragonsDisplay(dragons);
    }
    if (missions.length > 0) {
      setMissionsDisplay(missions);
    }
  });

  const layout = (
    <div className="l-myprofile">
      {missionsDisplay ? (
        <div>
          <h1 className="group">My Missions</h1>
          <Group data={missionsDisplay} />
        </div>
      ) : null}
      {rocketsDisplay ? (
        <div>
          <h1 className="group">My Rockets</h1>
          <Group data={rocketsDisplay} />
        </div>
      ) : null}
      {dragonsDisplay ? (
        <div>
          <h1 className="group">My Dragons</h1>
          <Group data={dragonsDisplay} />
        </div>
      ) : null}
    </div>
  );

  return layout;
}

export default MyProfile;
