import React, { useState } from 'react';

import { Typography, Popover } from 'antd';
const { Text } = Typography;

const StatItem = ({stat, char}) => {
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
      key={stat}
      content={`
        Initial: ${char.stats[stat].stat}
        Adv: ${char.stats[stat].adv}
      `}
      title={stat}
      trigger="click"
      visible={visible}
      onVisibleChange={handleVisible}
    >
      <Text key={stat}>{char.stats[stat].stat + char.stats[stat].adv}</Text>
    </Popover>
  )
}

export default StatItem;