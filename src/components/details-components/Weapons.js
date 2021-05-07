import React from 'react';

const Armor = () => {

  return(
    <div className="sheet-column">
      Weapons<br/>
      Name - Enc. - Damage - Qualities
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