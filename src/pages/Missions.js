import React, { useState, useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import store from '../redux/configureStore';
import {
  getMissions,
  removeReservation,
  addReservation,
} from '../redux/api/api';

function Missions(props) {
  const dispatch = useDispatch();
  const [missionsDisplay, setMissionsDisplay] = useState(null);
  const [calledMission, setCalledMission] = useState(null);

  // eslint-disable-next-line no-unused-vars
  const removeReserve = (e) => {
    const { id } = e.currentTarget;
    const data = { target: 'missions', id };
    dispatch(removeReservation(data));
  };

  const reserve = (e) => {
    const { id } = e.currentTarget;
    const data = { target: 'missions', id };
    dispatch(addReservation(data));
  };

  useEffect(() => {
    const { missions } = props;
    if (!calledMission && missions.length === 0) {
      props.getMissions();
    }
    if (missions !== undefined && missions !== missionsDisplay) {
      setCalledMission(true);
      setMissionsDisplay(missions);
    }
  });

  const layout = (
    <div className="l-missions">
      <table id="missions">
        <tbody>
          <tr>
            <th>Mission</th>
            <th>Description</th>
            <th>Status</th>
            <th> </th>
          </tr>
          {missionsDisplay
            ? missionsDisplay.map((m) => (
              <tr key={m.id}>
                <td className="mission-name">{m.name}</td>
                <td className="mission-description">{m.description}</td>
                <td className="mission-status">
                  {' '}
                  {m.reserved ? (
                    <h6 className="mission-badge-active">Active Member</h6>
                  ) : (
                    <h6 className="mission-badge">NOT A MEMBER</h6>
                  )}
                </td>
                <td className="mission-action">
                  {m.reserved ? (
                    <button
                      type="button"
                      id={m.id}
                      className="btn-reserve-mission-cancel"
                      onClick={removeReserve}
                    >
                      Leave Mission
                    </button>
                  ) : (
                    <button
                      type="button"
                      id={m.id}
                      className="btn-reserve-mission"
                      onClick={reserve}
                    >
                      Join Mission
                    </button>
                  )}
                </td>
              </tr>
            ))
            : null}
        </tbody>
      </table>
    </div>
  );

  return layout;
}

const mapStateToProps = (state) => ({
  missions: state.missionsReducer.missions,
});

export default connect(mapStateToProps, {
  store,
  removeReservation,
  addReservation,
  getMissions,
})(Missions);
