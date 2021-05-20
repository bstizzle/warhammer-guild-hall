import React, { useContext, useEffect } from 'react';
import { CharContext } from '../../CharContextProvider';
import { Row, Col } from 'antd';
import EditableTable from '../../table-components/EditableTable';

const BscSkills = () => {
  const { char, setChar } = useContext(CharContext)
  const basicSkills = char.basicSkills;
  const stats = char.stats;
  console.log(stats)

  function totalSkill(stat, adv) {
    console.log(stats[stat].stat + stats[stat].adv + adv)
    let skill = stats[stat].stat + stats[stat].adv + adv;
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
        key: i,
        name: k.name,
        stat: k.stat,
        adv: k.adv,
        total: totalSkill(k.stat, k.adv)
      })
    } else {
      bscData2.push({
        key: i,
        name: k.name,
        stat: k.stat,
        adv: k.adv,
        total: totalSkill(k.stat, k.adv)
      })
    }
    i++;
  })

  return(
    <Row>
      <Col span={12}>
        <EditableTable data={bscData1} columns={bscColumns}/>
      </Col>
      <Col span={12}>
        <EditableTable data={bscData2} columns={bscColumns}/>
      </Col>
    </Row>
  );
}

export default BscSkills;