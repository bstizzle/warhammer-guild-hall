import React, { useState, useContext } from 'react';
import { CharContext } from '../CharContextProvider';
import { Col, Descriptions, InputNumber } from 'antd';

const Fate = () => {
  const { char, setChar } = useContext(CharContext)
  const fate = char.fate
  const [fateState, setFateState] = useState(fate.fate)
  const [fortState, setFortState] = useState(fate.fortune)

  return(
    <Col span={8}>
      <Descriptions
        size="small"
        layout="vertical"
        bordered
        style={{background: '#141414'}}
        column={{ xxl: 2, xl: 2, lg: 1, md: 1, sm: 1, xs: 1 }}
      >
        <Descriptions.Item key="fate" label="Fate">
          <InputNumber size="small" style={{maxWidth: '40%'}} min={0} max={99} defaultValue={fateState} onChange={setFateState} />
        </Descriptions.Item>
        <Descriptions.Item key="fortune" label="Fortune">
          <InputNumber size="small" style={{maxWidth: '40%'}} min={0} max={99} defaultValue={fortState} onChange={setFortState} />
        </Descriptions.Item>
      </Descriptions>
    </Col>
  );
}

export default Fate;