import React from 'react';

import { useSelector } from 'react-redux';
import { selectChar } from '../../redux/characterSlice';

const Resolve = () => {
  const char = useSelector(selectChar)
  const resolveKeys = Object.keys(char.resolve);
  const resolve = resolveKeys.map(f => {
    return(
      <div key={f} className="sheet-div">
        {f}: {char.resolve[f]}
      </div>
    )
  })

  return(
    <div className="sheet-div">
      Resolve<br/>
      {resolve}
    </div>
  );
}

export default Resolve;