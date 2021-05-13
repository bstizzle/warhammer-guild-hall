import React from 'react';

import { useSelector } from 'react-redux';
import { selectChar } from '../../redux/characterSlice';

import { Descriptions } from 'antd';

const Stats = () => {
  const char = useSelector(selectChar)
  const statKeys = Object.keys(char.stats)

  const allStats = statKeys.map(s => {
    return(
      <Descriptions.Item key={s} label={s}>
        {char.stats[s]}
      </Descriptions.Item>
    )
  })

  return(
    <Descriptions
      column={10}
      size="small"
      layout="vertical"
      bordered>
      {allStats}
    </Descriptions>
  );
}

export default Stats;