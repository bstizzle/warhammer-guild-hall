//library imports
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setChar, selectChar } from '../redux/characterSlice';
import { useHistory } from 'react-router-dom';

//component imports
import { data } from '../fakeDb/fakeData';
import Stats from './Stats';
import Skills from './Skills';
import Bio from './Bio';

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
      <h2>{char.name}</h2>
      <Bio />
      {char.stats ? <Stats /> : null}
      {char.basicSkills ? <Skills /> : null}
      <button onClick={()=>history.push("/")}>BACK TO HOME PAGE</button>
    </div>
  );
}

export default CharacterSheet;