import React from 'react';

import { useSelector } from 'react-redux';
import { selectChar } from '../../redux/characterSlice';

import { Col, Descriptions } from 'antd';

const Fate = () => {
  const char = useSelector(selectChar)
  const fateKeys = Object.keys(char.fate);
  const fate = fateKeys.map(f => {
    return(
      <Descriptions.Item key={f} label={f}>
        {char.fate[f]}
      </Descriptions.Item>
    )
  })

  return(
    <Col span={8}>
      <Descriptions
        column={2}
        size="small"
        layout="vertical"
        bordered
        column={{ xxl: 2, xl: 2, lg: 2, md: 1, sm: 1, xs: 1 }}
      >
        {fate}
      </Descriptions>
    </Col>
  );
}

export default Fate;