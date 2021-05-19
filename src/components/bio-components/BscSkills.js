import React from 'react';
import { Row, Col, Table } from 'antd';

const BscSkills = ({ basicSkills, stats }) => {
  function totalSkill(stat, adv) {
    const skill = stats[stat].stat + adv;
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
      key: 'adv',
      editable: true
    },
    {
      title: 'Total',
      dataIndex: 'total',
      key: 'total'
    }
  ]

  let i = 0
  const bscData1 = []
  const bscData2 = []
  basicSkills.forEach(k => {
    if(i < 13){ 
      bscData1.push({
        name: k.name,
        stat: k.stat,
        adv: k.adv,
        total: totalSkill(k.stat, k.adv)
      })
    } else {
      bscData2.push({
        name: k.name,
        stat: k.stat,
        adv: k.adv,
        total: totalSkill(k.stat, k.adv)
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
          columns={bscColumns}
          dataSource={bscData1}
          rowKey="name"
        />
      </Col>
      <Col span={12}>
        <Table
          pagination={false}
          size="small"
          bordered
          columns={bscColumns}
          dataSource={bscData2}
          rowKey="name"
        />
      </Col>
    </Row>
  );
}

export default BscSkills;