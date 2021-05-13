import React from 'react';

import { Row, Col } from 'antd'

const Trappings = () => {

  return(
    <>
    <Row>
      <Col span={12}>
        Name
      </Col>
      <Col span={12}>
        Enc.
      </Col>
    </Row>
    <Row>
      <Col span={12}>
        Cloak
      </Col>
      <Col span={12}>
        1
      </Col>
    </Row>
    <Row>
      <Col span={12}>
        Animal Traps
      </Col>
      <Col span={12}>
        2
      </Col>
    </Row>
    </>
  );
}

export default Trappings;