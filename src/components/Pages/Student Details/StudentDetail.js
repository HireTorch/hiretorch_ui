import {
  FileOutlined,
  PieChartOutlined,
  CheckCircleOutlined,
  FileDoneOutlined,
  SolutionOutlined,
  UserOutlined,
  DesktopOutlined,
  TeamOutlined,
} from "@ant-design/icons";
import {
  IconDirectionSignOff,
  IconHome,
  IconHomeSearch,
  IconListSearch,
  IconSearch,
  IconSearchOff,
  IconSignatureOff,
  IconWritingSignOff,
} from "@tabler/icons-react";
import { Breadcrumb, Layout, Menu, theme } from "antd";
import { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import { Routes, useNavigate } from "react-router-dom";
import ProfileNavBar from "../ProfileNavBar";
import FileUpload from "./FileUpload";
import StudentQualification from "./Qualification/StudentQualification";
import StudentAddress from "./StudentAddress";
import StudentInfo from "./StudentInfo";
import Link from "antd/es/typography/Link";
import { LinkProps } from "antd/es/typography/Link";
import App from "antd";


const { Header, Content, Footer, Sider } = Layout;
function getItem(label, key, icon, children, link) {
  return {
    key,
    icon,
    children,
    label,
    link,
  };
}

const StudentDetail = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const navigate = useNavigate();
  const items = [
 
    getItem("My profile", "1", <UserOutlined component={<Link to="/Student-address" />}/>),
    // getItem("Add Details ", "sub1", <PieChartOutlined />, [
    //   getItem("Address", "3", <IconHome />),
    //   getItem("Qualification", "4", <SolutionOutlined />),
    //   getItem("Experience", "5", <FileDoneOutlined />),
    //   getItem("Resume", "6", <FileOutlined />),
    // ]),
    // getItem("Job Search", "7", <IconListSearch />),
    // getItem("Applied Job", "8", <CheckCircleOutlined />),
    // getItem("Logout", "9" , <IconDirectionSignOff/>),
  ];

  // for checking id of student
  useEffect(() => {
    if (!localStorage.getItem("id")) {
      navigate("/student-Login");
    }
  }, []);

  return (
    
    <Layout
      style={{
        minHeight: "40vh",
      }}
    >
    
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
      >
        <div
          style={{
            height: 50,
            margin: 25,
            background: "rgba(255, 255, 255, 0.2)",
          }}
        />

        <Menu
          theme="dark"
          defaultSelectedKeys={["1"]}
          mode="inline"
          items={items}
        />
      </Sider>

      <Layout className="site-layout">
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        >
        <ProfileNavBar />
        </Header>

        <Content
          style={{
            margin: "40px 30px",
          }}
        >
          <Breadcrumb
            style={{
              margin: "16px 10px",
            }}
          >
            <Breadcrumb.Item>Candidate </Breadcrumb.Item>
            <Breadcrumb.Item>Information</Breadcrumb.Item>
          </Breadcrumb>
          <div
            style={{
              padding: 50,
              minHeight: 700,
              background: colorBgContainer,
            }}
          >
            <StudentInfo />
            <hr />
            <StudentAddress />
            <hr />
            <FileUpload />
            <hr />
            <StudentQualification />
          </div>
        </Content>
        <Footer
          style={{
            textAlign: "center",
          }}
        >
          HireTorch_Job_Portal
        </Footer>
      </Layout>
    </Layout>
  );
};

export default StudentDetail;
