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
      <div key={key++} className="skill-row">
        <div key={key++} className="name-div">
          {k}:
        </div>
        <div key={key++} className="sheet-div">
          {char.basicSkills[k].stat}
        </div>
        <div key={key++} className="sheet-div">
          {char.basicSkills[k].adv}
        </div>
        <div key={key++} className="sheet-div">
          {totalSkill(char.basicSkills[k])}
        </div>
      </div>
    );
  })
  const advSkills = advSkillKeys.map(k => {
    return(
      <div key={key++} className="skill-row">
        <div key={key++} className="name-div">
          {k}:
        </div>
        <div key={key++} className="sheet-div">
          {char.advSkills[k].stat}
        </div>
        <div key={key++} className="sheet-div">
          {char.advSkills[k].adv}
        </div>
        <div key={key++} className="sheet-div">
          {totalSkill(char.advSkills[k])}
        </div>
      </div>
    );
  })

  // Refactor out into individual Skill components
  return(
    <>
      <div className="sheet-div">
        Basic Skills<br/>
        Name - Stat - Adv - Total
        {bscSkills}
      </div>
      <div className="sheet-div">
        Advanced Skills<br/>
        Name - Stat - Adv - Total
        {advSkills}
      </div>
    </>
  );
}

export default Skills;