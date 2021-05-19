import React from 'react';

// import { useSelector } from 'react-redux';
// import { selectChar } from '../../redux/characterSlice';

import { Col, Descriptions } from 'antd';

const Fate = ({ fate }) => {
  // const char = useSelector(selectChar)
  const fateKeys = Object.keys(fate);
  const fateItems = fateKeys.map(f => {
    return(
      <Descriptions.Item key={f} label={f.charAt(0).toUpperCase() + f.slice(1)}>
        {fate[f]}
      </Descriptions.Item>
    )
  })

  return(
    <Col span={8}>
      <Descriptions
        size="small"
        layout="vertical"
        bordered
        style={{background: '#141414'}}
        column={{ xxl: 2, xl: 2, lg: 2, md: 1, sm: 1, xs: 1 }}
      >
        {fateItems}
      </Descriptions>
    </Col>
  );
}

export default Fate;