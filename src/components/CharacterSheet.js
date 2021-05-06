import React, { useEffect } from 'react';
import { data } from '../fakeDb/fakeData';
import Stats from './Stats';
import Skills from './Skills';
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
    <div>
      {/* <button onClick={charDispatch}>GET CHAR</button> */}
      {char.name}
      {/* Refactor out into details component */}
      <div className="sheet-row">
        <div className="sheet-div">
          {data.name}
        </div>
          <div className="sheet-div">
        {data.species}
        </div>
        <div className="sheet-div">
          {data.class}
        </div>
        <div className="sheet-div">
          {data.career}
        </div>
      </div>

      {char.stats ?
        <Stats />
        :
        null
      }

      {/* Refactor out into skill tables component */}
      {char.basicSkills ?
        <Skills />
        :
        null
      }
    </div>
  );
}

export default CharacterSheet;