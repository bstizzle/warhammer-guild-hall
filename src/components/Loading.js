import React from 'react';

import { Spin, Typography, Row, Col } from 'antd';
const { Title } = Typography;

const Loading = () => {

  return(
    <Row>
      <Col>
        <Spin size="large" />
      </Col>
      <Col>
        <Title>Loading</Title>
      </Col>
      <Col>
        <Spin size="large" />
      </Col>
    </Row>
  );
}

export default Loading;