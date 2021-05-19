import React from 'react';

// import { useSelector } from 'react-redux';
// import { selectChar } from '../../redux/characterSlice';

import { Col, Descriptions } from 'antd';

const Resolve = ({ resolve }) => {
  // const char = useSelector(selectChar)
  const resolveKeys = Object.keys(resolve);
  const resolveItems = resolveKeys.map(r => {
    return(
      <Descriptions.Item key={r} label={r.charAt(0).toUpperCase() + r.slice(1)}>
        {resolve[r]}
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
        {resolveItems}
      </Descriptions>
    </Col>
  );
}

export default Resolve;