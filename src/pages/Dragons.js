import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Displayer from '../components/Displayer';
import { getDragons } from '../redux/api/api';

function Dragons() {
  const [dragonsDisplay, setDragonsDisplay] = useState(null);
  const [calledDragon, setCalledDragon] = useState(null);
  const dragons = useSelector((state) => state.dragonsReducer.dragons);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!calledDragon && dragons.length === 0) {
      setCalledDragon(true);
      dispatch(getDragons());
    }
    if (dragons !== undefined && dragons !== dragonsDisplay) {
      setDragonsDisplay(dragons);
    }
  });

  const layout = (
    <div className="rockets">
      <Displayer target="dragons" rockets={dragonsDisplay} />
    </div>
  );
  return layout;
}

export default Dragons;
