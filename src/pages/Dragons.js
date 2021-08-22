import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import store from '../redux/configureStore';
import Displayer from '../components/Displayer';
import { getDragons } from '../redux/api/api';

function Dragons(props) {
  const [dragonsDisplay, setDragonsDisplay] = useState(null);
  const [calledDragon, setCalledDragon] = useState(null);

  useEffect(() => {
    const { dragons } = props;
    console.log(dragons);
    if (!calledDragon && dragons.length === 0) {
      setCalledDragon(true);
      props.getDragons();
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

const mapStateToProps = (state) => ({
  dragons: state.dragonsReducer.dragons,
});

export default connect(mapStateToProps, { store, getDragons })(Dragons);
