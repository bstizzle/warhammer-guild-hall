import React, { useEffect } from 'react';
import { data } from '../fakeDb/fakeData';
import Stats from './Stats';
import { useSelector, useDispatch } from 'react-redux';
import { setChar, selectChar } from '../redux/characterSlice';

const CharacterSheet = () => {
  const dispatch = useDispatch();
  const char = useSelector(selectChar);
  console.log(char)

  useEffect(() => {
    dispatch(setChar(data))
  }, [dispatch])

  function totalSkill({stat, adv}) {
    const skill = data.stats[stat] + adv;
    return skill;
  }

  // let bscSkillKeys = Object.keys(data.basicSkills);
  // let advSkillKeys = Object.keys(data.advSkills);
  let bscSkillKeys;
  let advSkillKeys;
  if(char.basicSkills) {
    bscSkillKeys = Object.keys(char.basicSkills)
    advSkillKeys = Object.keys(char.advSkills)
  }

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
      <div className="sheet-row">
        <div className="sheet-div">
          Basic Skills
          <div className="sheet-div">
            {char.basicSkills ? bscSkillKeys[0] : null}: {totalSkill(data.basicSkills["Melee (Basic)"])}
          </div>
          <div className="sheet-div">
            {char.basicSkills ? bscSkillKeys[1] : null}: {totalSkill(data.basicSkills["Art"])}
          </div>
        </div>
        <div className="sheet-div">
          Advanced Skills
          <div className="sheet-div">
            {char.advSkills ? advSkillKeys[1] : null}: {totalSkill(data.advSkills["Lore (Witches)"])}
          </div>
          <div className="sheet-div">
            {char.advSkills ? advSkillKeys[0] : null}: {totalSkill(data.advSkills["Melee (Polearm)"])}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CharacterSheet;