import React from 'react';
import { useHistory } from 'react-router-dom';

import { Menu } from 'antd';
const { SubMenu } = Menu;

const Home = () => {
  const history = useHistory();

  function handleClick(e) {
    if(e.key === '1') {
      history.push('/')
    } else if(e.key === '2'){
      history.push('/sheet')
    }
  }

  return(
    <Menu
      defaultSelectedKeys={['1']}
      defaultOpenKeys={['sub1']}
      mode="inline"
    >
      <Menu.Item key="1" onClick={handleClick}>Home Page</Menu.Item>
      <Menu.Item key="2" onClick={handleClick}>Character Sheet</Menu.Item>
      <Menu.Item key="3">Option 3</Menu.Item>
    </Menu>
  );
}

export default Home;