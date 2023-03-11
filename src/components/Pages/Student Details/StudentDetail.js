import { FileOutlined, PieChartOutlined,CheckCircleOutlined,FileDoneOutlined, SolutionOutlined , UserOutlined ,DesktopOutlined,TeamOutlined } from '@ant-design/icons';
import { IconHome, IconHomeSearch,  IconListSearch, IconSearch, IconSearchOff } from '@tabler/icons-react';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import { useState } from 'react';
import FileUpload from './FileUpload';
import StudentQualification from './Qualification/StudentQualification';
import StudentAddress from './StudentAddress';
import StudentInfo from './StudentInfo';





const { Header, Content, Footer, Sider } = Layout;
function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}



const items = [
  getItem('My profile', '1', <UserOutlined /> ),
  getItem('Add Details ', 'sub1', <PieChartOutlined />, [
    getItem('Address', '3',<IconHome />),
    getItem('Qualification', '4',<SolutionOutlined/>),
    getItem('Experience', '5',<FileDoneOutlined/>),
    getItem('Resume', '6', <FileOutlined />),
  ]),
  getItem('Job Search', '7', <IconListSearch />),
  getItem('Applied Job', '8', <CheckCircleOutlined />),
  getItem('Logout', '9', <TeamOutlined />),

];


const StudentDetail = () => {

 
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();




  return (
    <Layout
      style={{
        minHeight: '100vh',
      }}
    >
      <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
        <div
          style={{
            height: 60,
            margin: 25,
            background: 'rgba(255, 255, 255, 0.2)',
          }}
        />
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} />
      </Sider>
      <Layout className="site-layout">
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        />
        <Content
          style={{
            margin: '0 16px',
          }}
        >
          <Breadcrumb
            style={{
              margin: '16px 0',
            }}
          >
            <Breadcrumb.Item>Candidate </Breadcrumb.Item>
            <Breadcrumb.Item>Information</Breadcrumb.Item>
          </Breadcrumb>
          <div
            style={{
              padding: 24,
              minHeight: 500,
              background: colorBgContainer,
            }}
          >
            <StudentInfo />
            <hr/>
             <FileUpload/>
             <hr/>
             <StudentAddress />
             <StudentQualification />
          </div>
         
        </Content>
        <Footer
          style={{
            textAlign: 'center',
          }}
        >
          HireTorch_Job_Portal
        </Footer>
      </Layout>
    </Layout>
  );
};
export default StudentDetail;