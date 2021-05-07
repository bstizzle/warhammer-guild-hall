import React from 'react';

import { useSelector } from 'react-redux';
import { selectChar } from '../../redux/characterSlice';

const Fate = () => {
  const char = useSelector(selectChar)
  const fateKeys = Object.keys(char.fate);
  const fate = fateKeys.map(f => {
    return(
      <div key={f} className="sheet-div">
        {f}: {char.fate[f]}
      </div>
    )
  })

  return(
    <div className="sheet-div">
      Fate<br/>
      {fate}
    </div>
  );
}

export default Fate;