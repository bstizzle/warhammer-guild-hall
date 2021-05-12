import React from 'react';

const Armor = () => {

  return(
    <>
      Armor<br/>
      Name - Location - Enc. - AP - Qualities
      <div className="sheet-row">
      </div>
      <div className="sheet-row">
        <div className="sheet-div" style={{flexGrow: 1}}>
          Leather Jerkin
        </div>
        <div className="sheet-div">
          Chest
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
    </>
  );
}

export default Armor;