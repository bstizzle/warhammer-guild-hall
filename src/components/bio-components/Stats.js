import React from 'react';

import { useSelector } from 'react-redux';
import { selectChar } from '../../redux/characterSlice';

import { Col } from 'antd';

const Stats = () => {
  const char = useSelector(selectChar)
  const statKeys = Object.keys(char.stats)

  const allStats = statKeys.map(s => {
    return(
      <Col key={s} span={1}>
        {s}<br/>
        {char.stats[s]}
      </Col>
    )
  })

  return(
    <>
      {allStats}
    </>
  );
}

export default Stats;