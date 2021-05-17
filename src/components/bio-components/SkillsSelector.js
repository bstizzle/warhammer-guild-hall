import React from 'react';
import BscSkills from './BscSkills';
import AdvSkills from './AdvSkills';

import { Tabs } from 'antd'
const { TabPane } = Tabs;

const SkillsSelector = () => {


  return(
    <Tabs
      mode="horizontal"
      centered
      style={{background: '#141414', paddingLeft: '3px', paddingRight: '3px'}}  
    >
        <TabPane tab="Basic Skills" key="Basic Skills">
          <BscSkills />
        </TabPane>
        <TabPane tab="Advanced Skills" key="Advanced Skills">
          <AdvSkills />
        </TabPane>
    </Tabs>
  );
}

export default SkillsSelector;