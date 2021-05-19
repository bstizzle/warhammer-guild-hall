import React from 'react';
import { Row, Col, Table, Button } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import EditableTable from './EditableTable';

const BscSkills = ({ advSkills, stats }) => {
  function totalSkill({stat, adv}) {
    const skill = stats[stat].stat + adv;
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

  let i = 0;
  const advData1 = [];
  const advData2 = [];
  if(advSkills) {
    advSkills.forEach(k => {
      if(i < 13){ 
        if(k.name){
          advData1.push({
            key: i,
            name: k.name,
            stat: k.stat,
            adv: k.adv,
            total: totalSkill(k.stat, k.adv)
          })
        } else {
          advData1.push({
            key: i,
            name: "hi",
            stat: "hi",
            adv: "hi",
            total: "hi"
          })
        }
      } else {
        if(k.name){
          advData2.push({
            key: i,
            name: k.name,
            stat: k.stat,
            adv: k.adv,
            total: totalSkill(k.stat, k.adv)
          })
        } else {
          advData2.push({
            key: i,
            name: "hi",
            stat: "hi",
            adv: "hi",
            total: "hi"
          })
        }
      i++;
      }
    })
  } else {
    for(i; i < 13; i++){
      advData1.push({
        key: i,
        name: "_________",
        stat: "__",
        adv: "__",
        total: "__"
      })
      advData2.push({
        key: i,
        name: "_________",
        stat: "__",
        adv: "__",
        total: "__"
      })
    }
  }

  return(
    <Row>
      <EditableTable />
      <Col span={12}>
        <Table
          pagination={false}
          size="small"
          bordered
          columns={advColumns} 
          dataSource={advData1}
          rowKey="key"
        />
      </Col>
      <Col span={12}>
      <Table
          pagination={false}
          size="small"
          bordered
          columns={advColumns} 
          dataSource={advData2}
          rowKey="key"
        />
      </Col>
    </Row>
  );
}

export default BscSkills;