import React, { useEffect } from 'react';
import { data } from '../fakeDb/fakeData';
import Stats from './Stats';
import Skills from './Skills';
import Bio from './Bio';
import { useSelector, useDispatch } from 'react-redux';
import { setChar, selectChar } from '../redux/characterSlice';

const CharacterSheet = () => {
  const dispatch = useDispatch();
  const char = useSelector(selectChar);
  console.log(char)

  useEffect(() => {
    dispatch(setChar(data))
  }, [dispatch])

  return(
    <div className="sheet-container">
      <Bio />
      {char.stats ? <Stats /> : null}
      {char.basicSkills ? <Skills /> : null}
    </div>
  );
}

export default CharacterSheet;