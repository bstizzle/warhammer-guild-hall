import React from 'react';
import { useSelector } from 'react-redux';
import { selectChar } from '../../redux/characterSlice';

import { Row, Col } from 'antd';

const Wounds = () => {
  const char = useSelector(selectChar)

  const totalWounds = (char.stats["S"] + char.stats["T"]*2 + char.stats["WP"])/10

  return(
    <Col span={6}>
      <Row>
        Wounds:
      </Row>
      <Row>
        {totalWounds}
      </Row>
    </Col>
  );
}

export default Wounds;