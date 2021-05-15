import React from 'react';
import { Route } from 'react-router-dom';
import CharacterSheet from './components/CharacterSheet';
import Banner from './components/Banner';
import Home from './components/Home';
import SideBar from './components/SideBar';

import { Layout } from 'antd';
const { Header, Sider, Content} = Layout;

function App() {

  return (
    <Layout>
      <Header>
        <Banner />
      </Header>
      <Layout>
        <Sider style={{height: '100vh'}}>
            <SideBar />
        </Sider>
        <Content style={{ padding: '2%' }}>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/sheet'>
            <CharacterSheet />
          </Route>
        </Content>
      </Layout>
    </Layout>
  );
}

export default App;
