import React from 'react';
import { Layout, Menu, SubMenu } from 'antd';
import { Link, Outlet, Route, Routes, useLocation } from 'react-router-dom';
import Home from '../pages/Home';
import Slides from '../pages/Lectures/Slides';
import Documents from '../pages/Lectures/Documents';
import Practices from '../pages/Practices/Practices';
import Labaratory from '../pages/Labaratory/Labaratory';
import Details from '../pages/Details/Details';
import SelfStudy from '../pages/SelfStudy/SelfStudy';
import Glossary from '../pages/Glassary';
import Certificate from '../pages/Certificate';
import Tests from '../pages/Tests';
import TestDetails from '../pages/TestDetails.jsx';
 

const { Header, Content, Footer, Sider } = Layout;

 

export default () => {
  const [title, setTitle] = React.useState('Default');

  const location = useLocation();

  console.log(location)

  return (
    <Layout hasSider>
    <Sider
      style={{
        overflow: 'auto',
        height: '100vh',
        position: 'fixed',
        left: 0,
        top: 0,
        bottom: 0,
        width: '300px',
      }}

      width={300}
    >
        <h1 className='logo'>FIZIKA <span>I</span></h1>
      <Menu  theme="dark" mode="inline" defaultSelectedKeys={['1']} style={{height: '100vh'}}>
        <Menu.Item key="1">
          <Link to="/">Bas bet</Link>
        </Menu.Item>
          <Menu.SubMenu key="sub1" title={<span>Lekciyalar</span>}>
            <Menu.Item key="lectures">
              <Link to="/lectures/slides">Prezentaciyalar</Link>
            </Menu.Item>
            <Menu.Item key="documents">
              <Link to="/lectures/documents">Lekciyalar</Link>
            </Menu.Item>
            <Menu.Item key="glassary">
              <Link to="/lectures/glassary">Glassary</Link>
            </Menu.Item>
          </Menu.SubMenu>
        <Menu.SubMenu key={'sub2'} title={`Ámeliy shınıǵıwlar `}> 
            <Menu.Item key="documents2">
              <Link to="/practices/documents">Ámeliy shınıǵıwlar </Link>
            </Menu.Item>
        </Menu.SubMenu>
        <Menu.Item key="3">
          <Link to="/labaratory">Labaratoriya shınıǵıwları </Link>
        </Menu.Item>
        <Menu.Item key="4">
          <Link to="/self-study">Óz betinshe tálim shınıǵıwları </Link>
        </Menu.Item>
        <Menu.Item key="7">
          <Link to="/certificate">Ruxsatnama</Link>
        </Menu.Item>
        <Menu.Item key="8">
          <Link to="/tests">Test sorawları</Link>
        </Menu.Item>
      </Menu>
    </Sider>
    <Layout className="site-layout" style={{ marginLeft: 300 }}>
      <Content style={{ padding: '24px 16px 16px', overflow: 'initial' }}>
        <div  style={{ textAlign: 'center', minHeight: '100vh' }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/lectures/slides" element={<Slides setTitle={setTitle}  />} />
            <Route path="/lectures/documents" element={<Documents  setTitle={setTitle} />} />
            <Route path="/practices/documents" element={<Practices  setTitle={setTitle} />} />
            <Route path="/labaratory" element={<Labaratory  setTitle={setTitle} />} />
            <Route path="/labaratory/:file" element={<Details  title={title} />} />
            <Route path="/lectures/slides/:file" element={<Details title={title}  />} />
            <Route path='/lectures/docs/:file' element={<Details  title={title} />} />
            <Route path='/practices/docs/:file' element={<Details  title={title} />} />
            <Route path='/self-study' element={<SelfStudy  setTitle={setTitle} />} />
            <Route path='/lectures/glassary' element={<Glossary  setTitle={setTitle} />} />
            <Route path='/lectures/glassary/:file' element={<Details  title={title} />} />
            <Route path='/self-study/:file' element={<Details  title={title} />} />
            <Route path='/certificate' element={<Certificate />} />
            <Route path='/tests' element={<Tests />} />
            <Route path='/tests/:file' element={<TestDetails  title={title} />} />
          </Routes>
        </div>
      </Content>
    </Layout>
  </Layout>
  )
}