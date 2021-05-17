import React from 'react';
import Talents from './Talents';

import { useSelector } from 'react-redux';
import { selectChar } from '../../redux/characterSlice';

import { Row, Col, Table } from 'antd';

const BscSkills = () => {
  const char = useSelector(selectChar)
  const  advSkillKeys = Object.keys(char.advSkills)

  function totalSkill({stat, adv}) {
    const skill = char.stats[stat].stat + adv;
    return skill;
  }

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

  let i = 0
  const advData1 = []
  const advData2 = []
  // const advData = advSkillKeys.map(k => {
  //   return {
  //     name: k,
  //     stat: char.advSkills[k].stat,
  //     adv: char.advSkills[k].adv,
  //     total: totalSkill(char.advSkills[k])
  //   }
  // })

  advSkillKeys.forEach(k => {
    if(i < 13){
      advData1.push({
        name: k,
        stat: char.advSkills[k].stat,
        adv: char.advSkills[k].adv,
        total: totalSkill(char.advSkills[k])
      })
    } else {
      advData2.push({
        name: k,
        stat: char.advSkills[k].stat,
        adv: char.advSkills[k].adv,
        total: totalSkill(char.advSkills[k])
      })
    }
    i++;
  })

  // Refactor out into individual Skill components
  return(
    <Row>
      <Col span={12}>
        <Table
          pagination={false}
          size="small"
          bordered
          columns={advColumns} 
          dataSource={advData1}
          rowKey="name"
        />
      </Col>
      <Col span={12}>
      <Table
          pagination={false}
          size="small"
          bordered
          columns={advColumns} 
          dataSource={advData2}
          rowKey="name"
        />
      </Col>
    </Row>
  );
}

export default BscSkills;