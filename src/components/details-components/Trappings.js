import React from 'react';

import { Table } from 'antd'

const Trappings = () => {

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name'
    },
    {
      title: 'Amount',
      dataIndex: 'amount',
      key: 'amount'
    },
    {
      title: 'Enc',
      dataIndex: 'enc',
      key: 'enc'
    }
  ]

  const data = [
    {
      name: 'Cloak',
      amount: '1',
      enc: '1',
    },
    {
      name: 'Animal Traps',
      amount: '2',
      enc: '2',
    }
  ]

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

export default Trappings;