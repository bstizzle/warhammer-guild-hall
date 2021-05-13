import React from 'react';

import { Row, Col } from 'antd';

const Armor = () => {

  return(
    <>
    <Row>
      <Col span={6}>
        Name
      </Col>
      <Col span={3}>
        Location
      </Col>
      <Col span={3}>
        Enc.
      </Col>
      <Col span={3}>
        AP
      </Col>
      <Col span={6}>
        Qualities
      </Col>
    </Row>
    <Row >
      <Col span={6}>
        Leather Jerkin
      </Col>
      <Col span={3}>
        Chest
      </Col>
      <Col span={3}>
        1
      </Col>
      <Col span={3}>
        1
      </Col>
      <Col span={6}>
        blank
      </Col>
    </Row>
    </>
  );
}

export default Armor;