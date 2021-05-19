import React from 'react';
import BscSkills from './BscSkills';
import AdvSkills from './AdvSkills';
import Talents from './Talents';

import { Tabs } from 'antd'
const { TabPane } = Tabs;

const SkillsSelector = ({ basicSkills, advSkills, stats, talents }) => {
  return(
    <Tabs
      mode="horizontal"
      centered
      style={{background: '#141414', paddingLeft: '3px', paddingRight: '3px'}}  
    >
        <TabPane tab="Basic Skills" key="Basic Skills">
          <BscSkills stats={stats} basicSkills={basicSkills} />
        </TabPane>
        <TabPane tab="Advanced Skills" key="Advanced Skills">
          <AdvSkills stats={stats} advSkills={advSkills} />
        </TabPane>
        <TabPane tab="Talents" key="Talents">
          <Talents talents={talents} />
        </TabPane>
    </Tabs>
  );
}

export default SkillsSelector;