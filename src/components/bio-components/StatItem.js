import React, { useState } from 'react';

import { Popover, Button, InputNumber } from 'antd';

const StatItem = ({s, stats}) => {
  const [visible, setVisible] = useState(false)
  const [init, setInit] = useState(stats[s].stat)
  const [adv, setAdv] = useState(stats[s].adv)
  
  function handleVisible(){
    if(visible === false){
      setVisible(true)
    } else {
      setVisible(false)
    }
  }

  return(
    <Popover
      key={s}
      content={
        <>
        Initial: <InputNumber size="small" min={0} max={99} defaultValue={init} onChange={setInit} /> | Adv: <InputNumber size="small" min={0} max={99} defaultValue={adv} onChange={setAdv} />
        </>}
      title={s}
      trigger="click"
      visible={visible}
      onVisibleChange={handleVisible}
    >
      <Button size="small" key={s}>{init + adv}</Button>
    </Popover>
  )
}

export default StatItem;