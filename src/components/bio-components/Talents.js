import React from 'react';

import { useSelector } from 'react-redux';
import { selectChar } from '../../redux/characterSlice';

import { Table } from 'antd';

const Talents = () => {
  const char = useSelector(selectChar)
  const talentKeys = Object.keys(char.talents)

  const columns = [
    {
      title: 'Talents',
      dataIndex: 'name',
      key: 'name'
    },
    {
      title: 'Times Taken',
      dataIndex: 'times',
      key: 'times'
    },
    {
      title: 'Description',
      dataIndex: 'desc',
      key: 'desc'
    }
  ]

  const data = talentKeys.map(k => {
    return {
      name: k,
      times: char.talents[k]
    }
  })

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

export default Talents;