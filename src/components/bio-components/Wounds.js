import React from 'react';
import { useSelector } from 'react-redux';
import { selectChar } from '../../redux/characterSlice';

import { Col, Descriptions } from 'antd';

const Wounds = () => {
  const char = useSelector(selectChar)

  const totalWounds = (char.stats["S"].stat + char.stats["T"].stat*2 + char.stats["WP"].stat)/10

  return(
    <Col span={8}>
      <Descriptions
        size="small"
        layout="vertical"
        bordered
        style={{background: '#141414'}}
        column={{ xxl: 2, xl: 2, lg: 2, md: 1, sm: 1, xs: 1 }}
      >
        <Descriptions.Item label="Wounds">{char.currentWounds} / {totalWounds}</Descriptions.Item>
        <Descriptions.Item label="+">-</Descriptions.Item>
      </Descriptions>
    </Col>
  );
}

export default Wounds;