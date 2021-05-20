import React from 'react';
import EditableTable from '../table-components/EditableTable';

const Armor = () => {
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      editable: true
    },
    {
      title: 'Enc',
      dataIndex: 'enc',
      key: 'enc',
      editable: true
    },
    {
      title: 'Damage',
      dataIndex: 'damage',
      key: 'damage',
      editable: true
    },
    {
      title: 'Qualities',
      dataIndex: 'qualities',
      key: 'qualities',
      editable: true
    }
  ]

  const data = [{
    name: 'Sword',
    enc: '1',
    damage: '5',
    qualities: 'blank'
  }]

  return(
    <EditableTable data={data} columns={columns} />
  );
}

export default Armor;