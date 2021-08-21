import React, { useEffect } from 'react';
import Displayer from '../components/Displayer';

function Dragons(props) {
  console.log(props);
  const { dragons, call } = props;
  useEffect(() => {
    call();
  });

  const layout = (
    <div className="rockets">
      <Displayer target="rockets" rockets={dragons} />
    </div>
  );

  return layout;
}

export default Dragons;
