import React from 'react';
import { Route } from 'react-router-dom';
import CharacterSheet from './components/CharacterSheet';
import Banner from './components/Banner';
import Home from './components/Home';

import { Layout } from 'antd';
const { Header, Sider, Content} = Layout;

function App() {

  return (
    <Layout>
      <Sider>
          Sider
      </Sider>
      <Layout>
        <Header>
          <Banner />
        </Header>
        <Content>
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
