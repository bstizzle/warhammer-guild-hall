import React from 'react';
import { useHistory } from 'react-router-dom';

import { Row, Col, Button } from 'antd';

const Home = () => {
  const history = useHistory();

  return(
    <Col>
      <Row>
        <h1>HOME PAGE</h1>
      </Row>
      <Row>
        <Button onClick={()=>history.push("./sheet")}>GO TO CHARACTER SHEET</Button>
      </Row>
    </Col>
  );
}

export default Home;