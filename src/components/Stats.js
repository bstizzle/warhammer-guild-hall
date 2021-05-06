import React from 'react';

import { useSelector } from 'react-redux';
import { selectChar } from '../redux/characterSlice';

const Stats = () => {
  const char = useSelector(selectChar)
  const statKeys = Object.keys(char.stats)

  const allStats = statKeys.map(s => {
    return(
      <div key={s} className="sheet-div">
        {s}<br/>
        {char.stats[s]}
      </div>
    )
  })

  return(
    <div className="sheet-row">
      {allStats}
    </div>
  );
}

export default Stats;