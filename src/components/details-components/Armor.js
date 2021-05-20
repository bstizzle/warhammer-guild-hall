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
      title: 'Location',
      dataIndex: 'location',
      key: 'location',
      editable: true
    },
    {
      title: 'Enc',
      dataIndex: 'enc',
      key: 'enc',
      editable: true
    },
    {
      title: 'AP',
      dataIndex: 'ap',
      key: 'ap',
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
    name: 'Leather Jerkin',
    location: 'Chest',
    enc: 1,
    ap: 1,
    qualities: 'blank',
    key: 0
  }]

  return(
    <EditableTable data={data} columns={columns} />
  );
}

export default Armor;