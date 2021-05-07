import React from 'react';

import { useSelector } from 'react-redux';
import { selectChar } from '../../redux/characterSlice';

const Talents = () => {
  const char = useSelector(selectChar)
  const talentKeys = Object.keys(char.talents)

  let key = 0;
  const talentList = talentKeys.map(t => {
    return(
      <div key={key++} className="sheet-row">
        <div key={key++} className="sheet-div" style={{flexGrow: 1}}>
          {t}
        </div>
        <div key={key++} className="sheet-div">
          {char.talents[t]}
        </div>
      </div>
    )
  })

  return(
    <div className="sheet-div" style={{flexGrow: 1}}>
      Talents<br/>
      Name - Times Taken
      {talentList}
    </div>
  );
}

export default Talents;