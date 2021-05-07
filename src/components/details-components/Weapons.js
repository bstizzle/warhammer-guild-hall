import React from 'react';

const Armor = () => {

  return(
    <div className="sheet-column">
      Weapons
      <div className="sheet-row">
        <div className="sheet-div" style={{flexGrow: 1}}>
          Name
        </div>
        <div className="sheet-div">
          Enc.
        </div>
        <div className="sheet-div">
          Damage
        </div>
        <div className="sheet-div">
          Qualities
        </div>
      </div>
      <div className="sheet-row">
      </div>
      <div className="sheet-row">
        <div className="sheet-div" style={{flexGrow: 1}}>
          Sword
        </div>
        <div className="sheet-div">
          1
        </div>
        <div className="sheet-div">
          5
        </div>
        <div className="sheet-div">
          blank
        </div>
      </div>
    </div>
  );
}

export default Armor;