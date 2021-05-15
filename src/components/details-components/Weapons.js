import React from 'react';

import { Table } from 'antd'

const Armor = () => {
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name'
    },
    {
      title: 'Enc',
      dataIndex: 'enc',
      key: 'enc'
    },
    {
      title: 'Damage',
      dataIndex: 'damage',
      key: 'damage'
    },
    {
      title: 'Qualities',
      dataIndex: 'qualities',
      key: 'qualities'
    }
  ]

  const data = [{
    name: 'Sword',
    enc: '1',
    damage: '5',
    qualities: 'blank'
  }]

  return(
    <Table 
      pagination={false}
      size="small"
      bordered
      columns={columns}
      dataSource={data}
      rowKey="name"
    />
  );
}

export default Armor;