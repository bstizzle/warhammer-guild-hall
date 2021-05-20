import React, { useState } from 'react';
import { Table, Popconfirm } from 'antd';
import EditableCell from './EditableCell';

const EditableTable = ({ data, columns }) => {
  const [tableData, setTableData] = useState(data)

  function handleSave(row) {
    const newData = [...tableData]
    const index = newData.findIndex((item) => row.key === item.key)
    newData.splice(index, 1, { ...row })
    setTableData(newData)
  }

  const components = {
    body: {
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
      <Table
        pagination={false}
        size="small"
        components={components}
        bordered
        dataSource={tableData}
        columns={editableColumns}
      />
    </div>
  )
}

export default EditableTable;