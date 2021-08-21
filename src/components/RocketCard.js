import React from 'react';
import { useDispatch } from 'react-redux';
import { removeReservation, addReservation } from '../redux/api/api';

function rocketcard(props) {
  const dispatch = useDispatch();
  const data = props;
  const { img } = data.data;
  const { title } = data.data;
  const { registered } = data.data;
  const { text } = data.data;

  const id = data.data.item_id;

  const removeReserve = () => {
    dispatch(removeReservation(id));
  };

  const reserve = () => {
    dispatch(addReservation(id));
  };

  return (
    <div className="rocketcard" id={id}>
      <div className="rocketcard-left">
        <img src={img} alt="" className="rocket-img" />
      </div>
      <div className="rocketcard-right">
        <h3 className="title">{title}</h3>
        <div className="text-block">
          {registered ? (<div className="reserved-bubble">Reserved</div>) : null}
          <p className="rocket-description">{text}</p>
        </div>

        <div className="actions">
          {registered ? (
            <button
              type="button"
              id="btn-reserve-cancel"
              className="btn-reserve-cancel"
              onClick={removeReserve}
            >
              Cancel Reservation
            </button>
          ) : (
            <button
              type="button"
              id="btn-reserve"
              className="btn-reserve"
              onClick={reserve}
            >
              Reserve
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default rocketcard;
