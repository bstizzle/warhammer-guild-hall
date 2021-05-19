import React from 'react';
import { Table, Row, Col } from 'antd';

const Talents = ({ talents }) => {
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
            name: talents[i].name,
            times: talents[i].times,
            // desc: talents[i].desc
          })
        } else {
          data1.push({
            name: "_________",
            times: "__",
            // desc: "__"
          })
        }
      } else {
        if(talents[i]){
          data2.push({
            name: talents[i].name,
            times: talents[i].times,
            // desc: talents[i].desc
          })
        } else {
          data2.push({
            name: "_________",
            times: "__",
            // desc: "__"
          })
        }
      }
    }
  } else {
    for(i; i < 26; i++){
      if(i < 13){
        data1.push({
          name: "_________",
          times: "__",
          // desc: "__"
        })
      } else {
        data2.push({
          name: "_________",
          times: "__",
          // desc: "__"
        })
      }
    }
  }

  return(
    <Row>
      <Col span={12}>
        <Table
          pagination={false}
          size="small"
          bordered
          columns={columns}
          dataSource={data1}
          rowKey="name"
        />
      </Col>
      <Col span={12}>
        <Table
          pagination={false}
          size="small"
          bordered
          columns={columns}
          dataSource={data2}
          rowKey="name"
        />
      </Col>
    </Row>
  );
}

export default Talents;