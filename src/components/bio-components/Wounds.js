import React, { useContext } from 'react';
import { CharContext } from '../CharacterSheet';
import { Col, Descriptions } from 'antd';

const Wounds = () => {
  const stats = useContext(CharContext).stats;
  const currentWounds = useContext(CharContext).currentWounds;
  const totalWounds = (stats["S"].stat + stats["T"].stat*2 + stats["WP"].stat)/10

  return(
    <Col span={8}>
      <Descriptions
        size="small"
        layout="vertical"
        bordered
        style={{background: '#141414'}}
        column={{ xxl: 2, xl: 2, lg: 2, md: 1, sm: 1, xs: 1 }}
      >
        <Descriptions.Item label="Wounds">{currentWounds} / {totalWounds}</Descriptions.Item>
        <Descriptions.Item label="+">-</Descriptions.Item>
      </Descriptions>
    </Col>
  );
}

export default Wounds;