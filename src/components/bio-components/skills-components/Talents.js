import React, { useContext } from 'react';
import { CharContext } from '../../CharContextProvider';
import { Row, Col } from 'antd';
import EditableTable from '../../table-components/EditableTable';

const Talents = () => {
  const { char } = useContext(CharContext)
  const talents = char.talents;
  
  const columns = [
    {
      title: 'Talents',
      dataIndex: 'name',
      key: 'name',
      editable: true
    },
    {
      title: 'Times Taken',
      dataIndex: 'times',
      key: 'times',
      editable: true
    },
    // {
    //   title: 'Description',
    //   dataIndex: 'desc',
    //   key: 'desc'
    // }
  ]

  let i = 0;
  const data1 = [];
  const data2 = [];
  if(talents) {
    for(i; i < 26; i++){
      if(i < 13){
        if(talents[i]){
          data1.push({
            key: i,
            name: talents[i].name,
            times: talents[i].times,
            // desc: talents[i].desc
          })
        } else {
          data1.push({
            key: i,
            name: "",
            times: "",
            // desc: ""
          })
        }
      } else {
        if(talents[i]){
          data2.push({
            key: i,
            name: talents[i].name,
            times: talents[i].times,
            // desc: talents[i].desc
          })
        } else {
          data2.push({
            key: i,
            name: "",
            times: "",
            // desc: ""
          })
        }
      }
    }
  } else {
    for(i; i < 26; i++){
      if(i < 13){
        data1.push({
          key: i,
          name: "",
          times: "",
          // desc: ""
        })
      } else {
        data2.push({
          key: i,
          name: "",
          times: "",
          // desc: ""
        })
      }
    }
  }

  return(
    <Row>
      <Col span={12}>
        <EditableTable data={data1} columns={columns} />
      </Col>
      <Col span={12}>
        <EditableTable data={data2} columns={columns} />
      </Col>
    </Row>
  );
}

export default Talents;