import React, { useState } from 'react';

import { useSelector } from 'react-redux';
import { selectChar } from '../../redux/characterSlice';
import StatItem from './StatItem';

import { Descriptions } from 'antd';

const Stats = () => {
  const char = useSelector(selectChar)
  const statKeys = Object.keys(char.stats)

  const allStats = statKeys.map(s => {
    return(
      <Descriptions.Item key={s} label={s}>
        <StatItem key={s} stat={s} char={char}/>
      </Descriptions.Item>
    )
  })

  return(
    <Descriptions
      size="small"
      layout="vertical"
      bordered
      style={{background: '#141414'}}
      column={{ xxl: 10, xl: 10, lg: 10, md: 5, sm: 5, xs: 3 }}
    >
      {allStats}
    </Descriptions>
  );
}

export default Stats;