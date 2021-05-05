import React from 'react';
import { data } from '../fakeDb/fakeData';

function CharacterSheet() {
  const bscSkillKeys = Object.keys(data.basicSkills)
  const advSkillKeys = Object.keys(data.advSkills)
  function totalSkill({stat, adv}) {
    const skill = data.stats[stat] + adv;
    return skill;
  }

  return(
    <div>
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

      {/* Refactor out into stats component */}
      <div className="sheet-row">
        <div className="sheet-div">
          WS: {data.stats.WS}
        </div>
        <div className="sheet-div">
          DS: {data.stats.DS}
        </div>
        <div className="sheet-div">
          S: {data.stats.S}
        </div>
        <div className="sheet-div">
          T: {data.stats.T}
        </div>
        <div className="sheet-div">
          I: {data.stats.I}
        </div>
        <div className="sheet-div">
          Ag: {data.stats.Ag}
        </div>
        <div className="sheet-div">
          Dex: {data.stats.Dex}
        </div>
        <div className="sheet-div">
          Int: {data.stats.Int}
        </div>
        <div className="sheet-div">
          WP: {data.stats.WP}
        </div>
        <div className="sheet-div">
          Fel: {data.stats.Fel}
        </div>
      </div>

      {/* Refactor out into skill tables component */}
      <div className="sheet-row">
        <div className="sheet-div">
          Basic Skills
          <div className="sheet-div">
            {bscSkillKeys[0]}: {totalSkill(data.basicSkills["Melee (Basic)"])}
          </div>
          <div className="sheet-div">
            {bscSkillKeys[1]}: {totalSkill(data.basicSkills["Art"])}
          </div>
        </div>
        <div className="sheet-div">
          Advanced Skills
          <div className="sheet-div">
            {advSkillKeys[0]}: {totalSkill(data.advSkills["Lore (Witches)"])}
          </div>
          <div className="sheet-div">
            {advSkillKeys[1]}: {totalSkill(data.advSkills["Melee (Polearm)"])}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CharacterSheet;