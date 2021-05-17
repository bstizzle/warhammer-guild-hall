import React from 'react';
import Trappings from './Trappings';
import Armor from './Armor';
import Weapons from './Weapons';

import { Tabs } from 'antd'
const { TabPane } = Tabs;

const DetailSelector = () => {


  return(
    <Tabs
      mode="horizontal"
      centered
      style={{background: '#141414', paddingLeft: '3px', paddingRight: '3px'}}  
    >
        <TabPane tab="Trappings" key="Trappings">
          <Trappings />
        </TabPane>
        <TabPane tab="Armor" key="Armor">
          <Armor />
        </TabPane>
        <TabPane tab="Weapons" key="Weapons">
          <Weapons />
        </TabPane>
    </Tabs>
  );
}

export default DetailSelector;