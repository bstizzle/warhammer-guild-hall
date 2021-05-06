import React from 'react';
import { useSelector } from 'react-redux';
import { selectChar } from '../redux/characterSlice';

const Bio = () => {
  const char = useSelector(selectChar)
  const bio = char.bio

  //figure out a way to automate two static rows
  
  // const bioKeys = Object.keys(bio)
  // const fullBio = bioKeys.map(b => {
  //   return(
  //     <div key={b} className="sheet-div">
  //       {b}: {bio[b]}
  //     </div>
  //   )
  // })

  return(
    <div className="sheet-row">
      <div className="sheet-div">
        <div className="bio-column">
          <div className="bio-row">
            <div className="sheet-div">
              Name: {bio["Name"]}
            </div>
            <div className="sheet-div">
              Species: {bio["Species"]}
            </div>
            <div className="sheet-div">
              Class: {bio["Class"]}
            </div>
            <div className="sheet-div">
              Career: {bio["Career"]}
            </div>
          </div>
          <div className="bio-row">
            <div className="sheet-div" style={{flexGrow: 1}}>
              Career Path: {bio["Career Path"]}
            </div>
            <div className="sheet-div">
              Career Level: {bio["Career Level"]}
            </div>
            <div className="sheet-div">
              Status: {bio["Status"]}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Bio;