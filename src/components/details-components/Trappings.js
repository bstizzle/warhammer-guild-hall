import React from 'react';

const Trappings = () => {

  return(
    <div className="sheet-column">
      Trappings<br/>
      Name - Enc.
      <div className="sheet-row">
        <div className="sheet-div" style={{flexGrow: 1}}>
          Cloak
        </div>
        <div className="sheet-div">
          1
        </div>
      </div>
      <div className="sheet-row">
        <div className="sheet-div" style={{flexGrow: 1}}>
          Animal Traps
        </div>
        <div className="sheet-div">
          2
        </div>
      </div>
    </div>
  );
}

export default Trappings;