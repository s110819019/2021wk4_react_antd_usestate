import { Layout } from 'antd';
import HamMenu from '../components/HamMenu'
import AppHeader from "../components/Header"
import AppFooter from "../components/Footer"
import ProductList from "../components/ProductList";
import cookware from "../json/cookware.json";
import { useState } from 'react';

const { Header, Content, Footer } = Layout;

function Cookware() {
  const [isOnTouch, setIsOnTouch] = useState(false);
  return (
    <Layout className="container main-layout">
      <Header className="layout-header">
        <HamMenu
          onClick={() => setIsOnTouch( !isOnTouch )}
          isOnTouch={ isOnTouch }
        />
        <AppHeader
          title="Cookware"
          isOnTouch={ isOnTouch }
        />
      </Header>
      <Content className="layout-content">
        <ProductList products={cookware}/>
      </Content>
      <Footer className="layout-footer">
        <AppFooter/>  
      </Footer>      
    </Layout>
  );
}

export default Cookware;
