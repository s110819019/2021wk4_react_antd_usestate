import { Layout } from 'antd';
import HamMenu from '../components/HamMenu'
import AppHeader from "../components/Header"
import AppFooter from "../components/Footer"
import ProductList from "../components/ProductList";
import furniture from "../json/furniture.json"
import { useState } from 'react';

const { Header, Content, Footer } = Layout;

function Furniture() {
  const [isOnTouch, setIsOnTouch] = useState(false);
  return (
    <Layout className="container main-layout">
      <Header className="layout-header">
        <HamMenu
          onClick={() => setIsOnTouch( !isOnTouch )}
          isOnTouch={ isOnTouch }
        />
        <AppHeader
          title="Furniture"
          isOnTouch={ isOnTouch }
        />
      </Header>
      <Content className="layout-content">
        <ProductList products={furniture}/>
      </Content>
      <Footer className="layout-footer">
        <AppFooter/>  
      </Footer>      
    </Layout>
  );
}

export default Furniture;
