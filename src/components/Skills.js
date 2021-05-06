import React from 'react';

import { useSelector } from 'react-redux';
import { selectChar } from '../redux/characterSlice';

const Skills = () => {
  const char = useSelector(selectChar)
  const  bscSkillKeys = Object.keys(char.basicSkills)
  const  advSkillKeys = Object.keys(char.advSkills)

  function totalSkill({stat, adv}) {
    const skill = char.stats[stat] + adv;
    return skill;
  }

  let key = 0;
  const bscSkills = bscSkillKeys.map(k => {
    return(
      <div key={key++} className="sheet-div">
        {k}: {totalSkill(char.basicSkills[k])}
      </div>
    );
  })
  const advSkills = advSkillKeys.map(k => {
    return(
      <div key={key++} className="sheet-div">
        {k}: {totalSkill(char.advSkills[k])}
      </div>
    );
  })

  // Refactor out into individual Skill components
  return(
    <div className="sheet-row">
      <div className="sheet-div">
        Basic Skills
        {bscSkills}
      </div>
      <div className="sheet-div">
        Advanced Skills
        {advSkills}
      </div>
    </div>
  );
}

export default Skills;