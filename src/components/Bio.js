import React from 'react';

import { useSelector } from 'react-redux';
import { selectChar } from '../redux/characterSlice';

const Bio = () => {
  const char = useSelector(selectChar)

  return(
    <div className="sheet-row">
      <div className="sheet-div">
        {char.name}
      </div>
      <div className="sheet-div">
        {char.species}
      </div>
      <div className="sheet-div">
        {char.class}
      </div>
      <div className="sheet-div">
        {char.career}
      </div>
    </div>
  );
}

export default Bio;