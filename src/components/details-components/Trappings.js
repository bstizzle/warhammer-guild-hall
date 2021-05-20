import React from 'react';
import EditableTable from '../table-components/EditableTable';

const Trappings = () => {

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      editable: true
    },
    {
      title: 'Amount',
      dataIndex: 'amount',
      key: 'amount',
      editable: true
    },
    {
      title: 'Enc',
      dataIndex: 'enc',
      key: 'enc',
      editable: true
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
    <EditableTable data={data} columns={columns} />
  );
}

export default Trappings;