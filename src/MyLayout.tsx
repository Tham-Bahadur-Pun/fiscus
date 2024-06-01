import { Button, Layout, Menu, theme } from "antd";
import { useState } from "react";
import { IoHome } from "react-icons/io5";
import { MdOutlineKeyboardArrowRight, MdPerson } from "react-icons/md";
import Header from "./components/Header";
import Icon from "./components/Icon";
import { Outlet, useNavigate } from "react-router";

const { Sider, Content } = Layout;

const MyLayout = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [selectedMenu, setSelectedMenu] = useState(1);
  const navigate = useNavigate()

  const menus = [
    {
      key: 1,
      label: "대시보드",
      icon: (
        <Icon
          itemKey={1}
          selectedMenu={selectedMenu}
          iconName={<IoHome color={selectedMenu === 1 ? "white" : "#6F80A0"} />}
        />
      ),
      href:'/dashboard'
    },
    {
      key: 2,
      label: "대시",
      icon: (
        <Icon
          itemKey={2}
          selectedMenu={selectedMenu}
          iconName={
            <MdPerson color={selectedMenu === 2 ? "white" : "#6F80A0"} />
          }
        />
      ),
      href:'./member-management'
    },
  ];

  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider
        trigger={null}
        collapsible
        collapsed={collapsed}
        style={{
          position: "fixed",
          height: "100vh",
          borderRight: "1px solid #E5E7EB",
          zIndex: 1, 
        }}
        theme="light"
        collapsedWidth={40}
        width={260}
      >
        <div className="demo-logo-vertical" />
        {collapsed && (
          <Button
            type="text"
            icon={<MdOutlineKeyboardArrowRight color="#babebd" size={30} />}
            onClick={() => setCollapsed(!collapsed)}
            style={{ marginTop: "1.5rem", marginLeft: "0.8rem" }}
          />
        )}
        {!collapsed && (
          <Menu
            mode="inline"
            defaultSelectedKeys={["1"]}
            style={{
              position: "relative",
              top: 90,
              fontWeight: 900,
              fontSize: "1rem",
              padding: "20px 10px 0px 22px",
            }}
            items={menus}
            onClick={(item) => {
              setSelectedMenu(+item.key);
              const route = menus.find(menu => menu.key === +item.key)?.href
              navigate(route!)
            }}
            
          />
        )}
      </Sider>
      <Layout style={{ marginLeft: collapsed ? 40 : 260 }}>
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            zIndex: !collapsed ? 2 : 0, // Ensure the header is above the sidebar
            height: 90,
            background: "#fff",
            borderBottom: "1px solid #E5E7EB",
          }}
        >
          <Header
            collapsed={collapsed}
            onCollapsed={() => setCollapsed(!collapsed)}
          />
        </div>
        <Content
          style={{
            marginTop: 90,
            padding: "16px 24px",
            overflowY: "auto",
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
            minHeight: "calc(100vh - 90px)",
          }}
        >
          <Outlet/>
        </Content>
      </Layout>
    </Layout>
  );
};

export default MyLayout;
