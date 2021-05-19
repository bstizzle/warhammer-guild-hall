import React, { useState } from 'react';
import { Table, Button, Popconfirm } from 'antd';
import EditableRow from './EditableRow';
import EditableCell from './EditableCell';
// import { PlusOutlined } from '@ant-design/icons';

const EditableTable = ({ data }) => {
  const [tableData, setTableData] = useState(data)
  // const [count, setCount] = useState(data.length)

  const columns = [
    {
      title: 'name',
      dataIndex: 'name',
      width: '30%',
      editable: true,
    },
    {
      title: 'age',
      dataIndex: 'age',
    },
    {
      title: 'address',
      dataIndex: 'address',
    },
    {
      title: 'operation',
      dataIndex: 'operation',
      render: (text, record, index) =>
        tableData.length >= 1 ? (
          <Popconfirm title="Sure to delete?" onConfirm={() => handleDelete(record.key)}>
            Delete
          </Popconfirm>
        ) : null,
    },
  ]

  function handleDelete(key) {
    console.log(key)
    const dataSource = [...tableData]
    console.log(dataSource)
    const newData = dataSource.filter((item) => {
      console.log(item)
      console.log(item.key)
      console.log(key)
      return item.key !== key;
    })
    console.log(newData)
    setTableData(newData)
  };
  // function handleAdd() {
  //   const dataSource = tableData
  //   console.log(count)
  //   const newData = {
  //     key: count,
  //     name: `Edward King ${count}`,
  //     age: '32',
  //     address: `London, Park Lane no. ${count}`,
  //   }
  //   setCount(count + 1)
  //   setTableData([...dataSource, newData])
  // };
  function handleSave(row) {
    const newData = [...tableData]
    const index = newData.findIndex((item) => row.key === item.key)
    newData.splice(index, 1, { ...row })
    setTableData(newData)
  }

  const components = {
    body: {
      row: EditableRow,
      cell: EditableCell
    }
  }

  const editableColumns = columns.map((c) => {
    if(!c.editable) {
      return c;
    }

    return {
      ...c,
      onCell: (record) => ({
        record,
        editable: c.editable,
        dataIndex: c.dataIndex,
        title: c.title,
        handleSave: handleSave
      })
    }
  })

  return (
    <div>
      {/* <Button
        onClick={handleAdd}
        type="primary"
        style={{
          marginBottom: 16,
        }}
      >
        <PlusOutlined />
      </Button> */}
      <Table
        components={components}
        bordered
        dataSource={tableData}
        columns={editableColumns}
      />
    </div>
  )
}

export default EditableTable;