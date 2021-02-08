import utils from '../utils';
import { useState } from 'react';


const StarMatch = () => {

  const [stars, setStars] = useState(utils.random(1, 9));

  return (
    <div className="game">
      <div className="help">
        Pick 1 or more numbers that sum to the number of stars
      </div>
      <div className="body">
        <div className="left">
          {
            utils.range(1, stars).map(starId => <div className="star" key={starId} />)
          }
        </div>
        <div className="right">
          {
            utils.range(1, 9).map(number =>
              <button className="number" key={number}>{number}</button>
            )
          }
        </div>
      </div>
      <div className="timer">Time Remaining: 10</div>
    </div>
  );
};

export default StarMatch;