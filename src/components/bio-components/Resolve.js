import React from 'react';

import { useSelector } from 'react-redux';
import { selectChar } from '../../redux/characterSlice';

import { Row, Col } from 'antd';

const Resolve = () => {
  const char = useSelector(selectChar)
  const resolveKeys = Object.keys(char.resolve);
  const resolve = resolveKeys.map(f => {
    return(
      <Row key={f}>
        {f}: {char.resolve[f]}
      </Row>
    )
  })

  return(
    <Col span={4}>
      {resolve}
    </Col>
  );
}

export default Resolve;