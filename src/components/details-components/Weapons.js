import React from 'react';

import { Row, Col } from 'antd'

const Armor = () => {

  return(
    <>
    <Row>
      <Col span={8}>
        Name
      </Col>
      <Col span={4}>
        Enc.
      </Col>
      <Col span={4}>
        Damage
      </Col>
      <Col span={8}>
        Qualities
      </Col>
    </Row>
    <Row>
      <Col span={8}>
        Sword
      </Col>
      <Col span={4}>
        1
      </Col>
      <Col span={4}>
        5
      </Col>
      <Col span={8}>
        blank
      </Col>
    </Row>
    </>
  );
}

export default Armor;