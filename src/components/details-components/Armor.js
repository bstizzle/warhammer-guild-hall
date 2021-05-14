import React from 'react';

import { Table } from 'antd';

const Armor = () => {

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name'
    },
    {
      title: 'Location',
      dataIndex: 'location',
      key: 'location'
    },
    {
      title: 'Enc',
      dataIndex: 'enc',
      key: 'enc'
    },
    {
      title: 'AP',
      dataIndex: 'ap',
      key: 'ap'
    },
    {
      title: 'Qualities',
      dataIndex: 'qualities',
      key: 'qualities'
    }
  ]

  const data = [{
    name: 'Leather Jerkin',
    location: 'Chest',
    enc: '1',
    ap: '1',
    qualities: 'blank'
  }]

  return(
    <Table 
      pagination={false}
      size="small"
      columns={columns}
      dataSource={data}
    />
  );
}

export default Armor;