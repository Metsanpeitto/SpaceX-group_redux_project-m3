import React, { useState, useEffect } from 'react';
import RocketCard from './RocketCard';

function Displayer(props) {
  // eslint-disable-next-line react/prop-types
  const { rockets } = props;
  const [rocketsDisplay, setRocketsDisplay] = useState(null);

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    if (rockets) {
      if (rockets !== rocketsDisplay) {
        setRocketsDisplay(rockets);
      }
    }
  });

  if (rocketsDisplay) {
    return (
      <div className="rockets-displayer">
        {rocketsDisplay.map((b) => (
          <RocketCard key={b.title} data={b} />
        ))}
      </div>
    );
  }
  return <h3>Empty collection</h3>;
}

export default Displayer;
