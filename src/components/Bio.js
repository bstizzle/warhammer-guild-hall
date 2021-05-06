import React from 'react';
import { useSelector } from 'react-redux';
import { selectChar } from '../redux/characterSlice';

const Bio = () => {
  const char = useSelector(selectChar)

  return(
    <div className="sheet-row">
      <div className="name-div" style={{fontSize: "5vw", paddingTop: "30px"}}>
        {char.name}
      </div>
      <div className="sheet-div" style={{flexGrow: 3}}>
        <div className="bio-column">
          <div className="bio-row">
            <div className="sheet-div">
              Species: {char.species}
            </div>
            <div className="sheet-div">
              Class: {char.class}
            </div>
            <div className="sheet-div">
              Career: {char.career}
            </div>
            <div className="sheet-div">
              Career Level: {char.careerLvl}
            </div>
          </div>
          <div className="bio-row">
            <div className="sheet-div">
              Career Path: {char.careerPath}
            </div>
            <div className="sheet-div">
              Status: {char.status}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Bio;