import React from 'react';

import { Tabs } from 'antd'
const { TabPane } = Tabs;

const DetailSelector = ({ detailPage, setDetailPage }) => {

  function handleSetDetail(key) {
    setDetailPage(key)
  }

  return(
    <Tabs
      onChange={handleSetDetail}
      defaultActiveKey={detailPage}
      mode="horizontal"
      style={{background: '#141414', paddingLeft: '5px'}}  
    >
        <TabPane tab="Trappings" key="Trappings" />
        <TabPane tab="Armor" key="Armor" />
        <TabPane tab="Weapons" key="Weapons" />
    </Tabs>
  );
}

export default DetailSelector;