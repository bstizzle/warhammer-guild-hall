import React from 'react';
import { useSelector } from 'react-redux';
import { selectChar } from '../../redux/characterSlice';

const Wounds = () => {
  const char = useSelector(selectChar)

  const totalWounds = (char.stats["S"] + char.stats["T"]*2 + char.stats["WP"])/10

  return(
    <>
      <div className="sheet-row">
        <div className="sheet-div">
          Wounds:
        </div>
        <div className="sheet-div">
          {totalWounds}
        </div>
      </div>
      Armor Class<br/>
      <div className="sheet-row">
        <div className="sheet-div">
          Head: 0
        </div>
      </div>
      <div className="sheet-row">
        <div className="sheet-div">
          Left Arm: 0
        </div>
        <div className="sheet-div">
          Torso: 0
        </div>
        <div className="sheet-div">
          Right Arm: 0
        </div>
      </div>
      <div className="sheet-row">
        <div className="sheet-div">
          Left Leg: 0
        </div>
        <div className="sheet-div">
          Right Leg: 0
        </div>
      </div>
    </>
  );
}

export default Wounds;