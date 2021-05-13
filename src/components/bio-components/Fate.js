import React from 'react';

import { useSelector } from 'react-redux';
import { selectChar } from '../../redux/characterSlice';

import { Row, Col} from 'antd';

const Fate = () => {
  const char = useSelector(selectChar)
  const fateKeys = Object.keys(char.fate);
  const fate = fateKeys.map(f => {
    return(
      <Row key={f}>
        {f}: {char.fate[f]}
      </Row>
    )
  })

  return(
    <Col span={4}>
      {fate}
    </Col>
  );
}

export default Fate;