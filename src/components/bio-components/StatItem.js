import React, { useState } from 'react';

import { Popover, Button } from 'antd';

const StatItem = ({s, char}) => {
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
        Initial: ${char.stats[s].stat} | Adv: ${char.stats[s].adv}
      `}
      title={s}
      trigger="click"
      visible={visible}
      onVisibleChange={handleVisible}
    >
      <Button size="small" key={s}>{char.stats[s].stat + char.stats[s].adv}</Button>
    </Popover>
  )
}

export default StatItem;