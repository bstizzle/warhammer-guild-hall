import React from 'react';

import { useSelector } from 'react-redux';
import { selectChar } from '../../redux/characterSlice';

import { Col, Descriptions } from 'antd';

const Resolve = () => {
  const char = useSelector(selectChar)
  const resolveKeys = Object.keys(char.resolve);
  const resolve = resolveKeys.map(f => {
    return(
      <Descriptions.Item key={f} label={f}>
        {char.resolve[f]}
      </Descriptions.Item>
    )
  })

  return(
    <Col span={8}>
      <Descriptions
        column={2}
        size="small"
        layout="vertical"
        bordered>
        {resolve}
      </Descriptions>
    </Col>
  );
}

export default Resolve;