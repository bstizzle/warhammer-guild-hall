import React from 'react';

import { useSelector } from 'react-redux';
import { selectChar } from '../../redux/characterSlice';

import { Row, Col } from 'antd';

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
      <Row key={key++} gutter={[16, 16]}>
        <Col key={key++} span={12}>
          {k}:
        </Col>
        <Col key={key++} span={3}>
          {char.basicSkills[k].stat}
        </Col>
        <Col key={key++} span={3}>
          {char.basicSkills[k].adv}
        </Col>
        <Col key={key++} span={3}>
          {totalSkill(char.basicSkills[k])}
        </Col>
      </Row>
    );
  })
  const advSkills = advSkillKeys.map(k => {
    return(
      <Row key={key++} gutter={[16, 16]}>
        <Col key={key++} span={12}>
          {k}:
        </Col>
        <Col key={key++} span={3}>
          {char.advSkills[k].stat}
        </Col>
        <Col key={key++} span={3}>
          {char.advSkills[k].adv}
        </Col>
        <Col key={key++} span={3}>
          {totalSkill(char.advSkills[k])}
        </Col>
      </Row>
    );
  })

  // Refactor out into individual Skill components
  return(
    <Row>
      <Col>
        Basic Skills<br/>
        Name - Stat - Adv - Total
        {bscSkills}
      </Col>
      <Col>
        Advanced Skills<br/>
        Name - Stat - Adv - Total
        {advSkills}
      </Col>
    </Row>
  );
}

export default Skills;