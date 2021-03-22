import { Layout } from 'antd';
import HamMenu from '../components/HamMenu'
import AppHeader from "../components/Header"
import AppFooter from "../components/Footer"
import ProductList from "../components/ProductList";
import textile from "../json/textile.json";
import { useState } from 'react';

const { Header, Content, Footer } = Layout;

function Textile() {
  const [isOnTouch, setIsOnTouch] = useState(false);
  return (
    <Layout className="container main-layout">
      <Header className="layout-header">
        <HamMenu
            onClick={() => setIsOnTouch( !isOnTouch )}
            isOnTouch={ isOnTouch }
          />
          <AppHeader
            title="Textile"
            isOnTouch={ isOnTouch }
          />
      </Header>
      <Content className="layout-content">
        <ProductList products={textile} />
      </Content>
      <Footer className="layout-footer">
        <AppFooter/>  
      </Footer>      
    </Layout>
  );
}

export default Textile;
