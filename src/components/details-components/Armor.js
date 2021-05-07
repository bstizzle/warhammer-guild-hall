import React from 'react';

const Armor = () => {

  return(
    <div className="sheet-column">
      Armor
      <div className="sheet-row">
        <div className="sheet-div" style={{flexGrow: 1}}>
          Name
        </div>
        <div className="sheet-div">
          Location
        </div>
        <div className="sheet-div">
          Enc.
        </div>
        <div className="sheet-div">
          AP
        </div>
        <div className="sheet-div">
          Qualities
        </div>
      </div>
      <div className="sheet-row">
      </div>
      <div className="sheet-row">
        <div className="sheet-div" style={{flexGrow: 1}}>
          Leather Jerkin
        </div>
        <div className="sheet-div">
          1
        </div>
        <div className="sheet-div">
          1
        </div>
        <div className="sheet-div">
          blank
        </div>
      </div>
    </div>
  );
}

export default Armor;