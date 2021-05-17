import React from 'react';
import { Route } from 'react-router-dom';
import CharacterSheet from './components/CharacterSheet';
import Banner from './components/Banner';
import Home from './components/Home';
import SideBar from './components/SideBar';
import parchment from './textures/parchment.jpg';
// import darkParchment from './textures/dark-parchment.jpg';

import { Layout } from 'antd';
const { Header, Sider, Footer, Content} = Layout;

function App() {

  return (
    <Layout style={{minHeight: '100vh'}}>
      <Header>
        <Banner />
      </Header>
      <Layout>
        <Sider>
            <SideBar />
        </Sider>
        <Content style={{padding: '1%', backgroundImage: `url(${parchment})`, backgroundSize: 'cover'}}>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/sheet'>
            <CharacterSheet />
          </Route>
        </Content>
      </Layout>
      <Footer>
        Footer
      </Footer>
    </Layout>
  );
}

export default App;
