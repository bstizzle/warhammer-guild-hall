import React from 'react';

import { useSelector } from 'react-redux';
import { selectChar } from '../../redux/characterSlice';

import { Row, Col, Table } from 'antd';

const Skills = () => {
  const char = useSelector(selectChar)
  const  bscSkillKeys = Object.keys(char.basicSkills)
  const  advSkillKeys = Object.keys(char.advSkills)

  function totalSkill({stat, adv}) {
    const skill = char.stats[stat] + adv;
    return skill;
  }

  const bscColumns = [
    {
      title: 'Basic Skills',
      dataIndex: 'name',
      key: 'name'
    },
    {
      title: 'Stat',
      dataIndex: 'stat',
      key: 'stat'
    },
    {
      title: 'Adv',
      dataIndex: 'adv',
      key: 'adv'
    },
    {
      title: 'Total',
      dataIndex: 'total',
      key: 'total'
    }
  ]

  const advColumns = [
    {
      title: 'Advanced Skills',
      dataIndex: 'name',
      key: 'name'
    },
    {
      title: 'Stat',
      dataIndex: 'stat',
      key: 'stat'
    },
    {
      title: 'Adv',
      dataIndex: 'adv',
      key: 'adv'
    },
    {
      title: 'Total',
      dataIndex: 'total',
      key: 'total'
    }
  ]

  const bscData = bscSkillKeys.map(k => {
    return {
      name: k,
      stat: char.basicSkills[k].stat,
      adv: char.basicSkills[k].adv,
      total: totalSkill(char.basicSkills[k])
    }
  })
  const advData = advSkillKeys.map(k => {
    return {
      name: k,
      stat: char.advSkills[k].stat,
      adv: char.advSkills[k].adv,
      total: totalSkill(char.advSkills[k])
    }
  })

  // Refactor out into individual Skill components
  return(
    <Row>
      <Col span={12}>
        <Table
          pagination={false}
          size="small"
          columns={bscColumns}
          dataSource={bscData}
        />
      </Col>
      <Col span={12}>
        <Table
          pagination={false}
          size="small"
          columns={advColumns} 
          dataSource={advData}
        />
      </Col>
    </Row>
  );
}

export default Skills;