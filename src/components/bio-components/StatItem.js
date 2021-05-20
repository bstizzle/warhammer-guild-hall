import React, { useState, useEffect, useContext } from 'react';
import { CharContext } from '../CharContextProvider';
import { Popover, Button, InputNumber } from 'antd';

const StatItem = ({ s, stats, setStats }) => {
  const { char, setChar } = useContext(CharContext)
  const [visible, setVisible] = useState(false)
  const [init, setInit] = useState(stats[s].stat)
  const [adv, setAdv] = useState(stats[s].adv)

  useEffect(() => {
    setChar(char => ({
      ...char,
      stats: {
          ...stats,
          [s]: {
            stat: init,
            adv: adv
          }
        }
      })
    )
  }, [setChar, s, stats, init, adv])
  
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
        Initial: <InputNumber style={{maxWidth: '60px'}} size="small" min={0} max={99} defaultValue={init} onChange={setInit} /> | Adv: <InputNumber style={{maxWidth: '60px'}} size="small" min={0} max={99} defaultValue={adv} onChange={setAdv} />
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