import React from 'react';
import { Layout, Menu, SubMenu } from 'antd';
import { Link, Outlet, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Slides from '../pages/Lectures/Slides';
import Documents from '../pages/Lectures/Documents';
import Practices from '../pages/Practices/Practices';
import Labaratory from '../pages/Labaratory/Labaratory';
import Details from '../pages/Details/Details';
import SelfStudy from '../pages/SelfStudy/SelfStudy';
 

const { Header, Content, Footer, Sider } = Layout;

 

export default () => {
  const [title, setTitle] = React.useState('Default');

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
        <h1 className='logo'><span>F</span>IZIKA</h1>
      <Menu  theme="dark" mode="inline" defaultSelectedKeys={['1']} style={{height: '100vh'}}>
        <Menu.Item key="1">
          <Link to="/lectures">Bas bet</Link>
        </Menu.Item>
          <Menu.SubMenu key="sub1" title={<span>Leksiyalar</span>}>
            <Menu.Item key="lectures">
              <Link to="/lectures/slides">Prezidentatsiyalar</Link>
            </Menu.Item>
            <Menu.Item key="documents">
              <Link to="/lectures/documents">Leksiyalar</Link>
            </Menu.Item>
          </Menu.SubMenu>
        <Menu.SubMenu key={'sub2'} title={`A'meliyatlar`}> 
            <Menu.Item key="documents2">
              <Link to="/practices/documents">A'meliyatlar</Link>
            </Menu.Item>
        </Menu.SubMenu>
        <Menu.Item key="3">
          <Link to="/labaratory">Labaratoriya</Link>
        </Menu.Item>
        <Menu.Item key="4">
          <Link to="/self-study">Mustaqil ta'lim</Link>
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
            <Route path='/self-study/:file' element={<Details  title={title} />} />
          </Routes>
        </div>
      </Content>
    </Layout>
  </Layout>
  )
}