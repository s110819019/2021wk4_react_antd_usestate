import { Layout } from 'antd';
import HamMenu from '../components/HamMenu'
import AppHeader from "../components/Header"
import AppFooter from "../components/Footer"
import ProductList from "../components/ProductList";
import homeAccessories from "../json/home-accessories.json";
import { useState } from 'react';

const { Header, Content, Footer } = Layout;

function HomeAccessories() {
  const [isOnTouch, setIsOnTouch] = useState(false);
  return (
    <Layout className="container main-layout">
      <Header className="layout-header">
        <HamMenu
          onClick={() => setIsOnTouch( !isOnTouch )}
          isOnTouch={ isOnTouch }
        />
        <AppHeader
          title="Home Accessories"
          isOnTouch={ isOnTouch }
        />
      </Header>
      <Content className="layout-content">
        <ProductList products={homeAccessories} />
      </Content>
      <Footer className="layout-footer">
        <AppFooter/>  
      </Footer>      
    </Layout>
  );
}

export default HomeAccessories;
