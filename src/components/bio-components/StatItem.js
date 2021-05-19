import React, { useState } from 'react';

import { Popover, Button } from 'antd';

const StatItem = ({s, stats}) => {
  const [visible, setVisible] = useState(false)
  
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
      content={`
        Initial: ${stats[s].stat} | Adv: ${stats[s].adv}
      `}
      title={s}
      trigger="click"
      visible={visible}
      onVisibleChange={handleVisible}
    >
      <Button size="small" key={s}>{stats[s].stat + stats[s].adv}</Button>
    </Popover>
  )
}

export default StatItem;