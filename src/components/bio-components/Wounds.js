import React from 'react';
import { useSelector } from 'react-redux';
import { selectChar } from '../../redux/characterSlice';

import { Col, Descriptions } from 'antd';

const Wounds = () => {
  const char = useSelector(selectChar)

  const totalWounds = (char.stats["S"] + char.stats["T"]*2 + char.stats["WP"])/10

  return(
    <Col span={8}>
      <Descriptions
        size="small"
        layout="vertical"
        bordered
      >
        <Descriptions.Item label="Wounds">{totalWounds}</Descriptions.Item>
        <Descriptions.Item label="+">-</Descriptions.Item>
      </Descriptions>
    </Col>
  );
}

export default Wounds;