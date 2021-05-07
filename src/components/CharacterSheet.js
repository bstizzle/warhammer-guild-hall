//library imports
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setChar, selectChar } from '../redux/characterSlice';
import { useHistory } from 'react-router-dom';

//component imports
import { data } from '../fakeDb/fakeData';
import { Trappings } from './details-components/detailsExport';
import { Stats, Skills, Bio } from './bio-components/bioExport';

const CharacterSheet = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const char = useSelector(selectChar);
  console.log(char)

  useEffect(() => {
    dispatch(setChar(data))
  }, [dispatch])

  return(
    <div className="sheet-container">
      <div className="sheet-row">
        <div className="sheet-div" style={{flexGrow: 1}}>
          <div className="sheet-row">
            {char.bio ? <Bio /> : null}
          </div>
          <div className="sheet-row">
            {char.stats ? <Stats /> : null}
          </div>
          <div className="sheet-row">
            {char.basicSkills ? <Skills /> : null}
          </div>
        </div>
        <div className="sheet-div" style={{flexGrow: 1}}>
          <Trappings />
        </div>
      </div>


      <button onClick={()=>history.push("/")}>BACK TO HOME PAGE</button>

      {/*
        Fate/Resilience
        Experience
        Movement
        Talents
        Ambitions
        Party
        Armor
        Armor Points
        Trappings
        Psychology
        Corruption/Mutation
        Weapons
        Spells
        Wounds
        Wealth
        Encumberance
      */}
    </div>
  );
}

export default CharacterSheet;