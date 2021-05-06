import React from 'react';

import { useSelector } from 'react-redux';
import { selectChar } from '../redux/characterSlice';

const Skills = () => {
  const char = useSelector(selectChar)

  function totalSkill({stat, adv}) {
    const skill = char.stats[stat] + adv;
    return skill;
  }

  let bscSkillKeys;
  let advSkillKeys;
  if(char.basicSkills) {
    bscSkillKeys = Object.keys(char.basicSkills)
    advSkillKeys = Object.keys(char.advSkills)
  }

  // Refactor out into individual Skill components
  return(
    <div className="sheet-row">
      <div className="sheet-div">
        Basic Skills
        <div className="sheet-div">
          {bscSkillKeys[0]}: {totalSkill(char.basicSkills["Melee (Basic)"])}
        </div>
        <div className="sheet-div">
          {bscSkillKeys[1]}: {totalSkill(char.basicSkills["Art"])}
        </div>
      </div>
      <div className="sheet-div">
        Advanced Skills
        <div className="sheet-div">
          {advSkillKeys[1]}: {totalSkill(char.advSkills["Lore (Witches)"])}
        </div>
        <div className="sheet-div">
          {advSkillKeys[0]}: {totalSkill(char.advSkills["Melee (Polearm)"])}
        </div>
      </div>
    </div>
  );
}

export default Skills;