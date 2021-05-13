import React from 'react';

import { useSelector } from 'react-redux';
import { selectChar } from '../../redux/characterSlice';

import { Row, Col } from 'antd';

const Talents = () => {
  const char = useSelector(selectChar)
  const talentKeys = Object.keys(char.talents)

  let key = 0;
  const talentList = talentKeys.map(t => {
    return(
      <Row key={key++}>
        <Col key={key++}>
          {t}:
        </Col>
        <Col key={key++}>
          {char.talents[t]}
        </Col>
      </Row>
    )
  })

  return(
    <Row>
      <Col>
      Talents<br/>
      Name - Times Taken
      {talentList}
      </Col>
    </Row>
  );
}

export default Talents;