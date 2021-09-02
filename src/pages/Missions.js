import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  getMissions,
  removeReservation,
  addReservation,
} from '../redux/api/api';

const Missions = () => {
  const dispatch = useDispatch();
  const [missionsDisplay, setMissionsDisplay] = useState(null);
  const [calledMission, setCalledMission] = useState(null);
  const missions = useSelector((state) => state.missionsReducer.missions);

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
    if (!calledMission && missions.length === 0) {
      dispatch(getMissions());
    }
    if (missions !== undefined && missions !== missionsDisplay) {
      setCalledMission(true);
      setMissionsDisplay(missions);
    }
  });

  return (
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
};

export default Missions;
