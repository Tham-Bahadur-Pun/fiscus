import { Button, Layout, Menu, theme } from "antd";
import { useState } from "react";
import { IoAnalytics, IoClipboard, IoHelpCircle, IoHome, IoMail, IoNotifications, IoPerson, IoPulse, IoSettings } from "react-icons/io5";
import { MdBusinessCenter, MdOutlineKeyboardArrowRight, MdPerson } from "react-icons/md";
import { Outlet, useNavigate } from "react-router";
import Header from "./components/Header";
import Icon from "./components/Icon";

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
      label: "회원 관리",
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
    {
      key: 3,
      label: "영업 관리",
      icon: (
          <Icon
              itemKey={3}
              selectedMenu={selectedMenu}
              iconName={<MdBusinessCenter color={selectedMenu === 3 ? "white" : "#6F80A0"} />}
          />
      ),
      href: './business-management'
  },
  {
      key: 4,
      label: "프로파일",
      icon: (
          <Icon
              itemKey={4}
              selectedMenu={selectedMenu}
              iconName={<IoPerson color={selectedMenu === 4 ? "white" : "#6F80A0"} />}
          />
      ),
      href: '/profile'
  },
  {
      key: 5,
      label: "메시지",
      icon: (
          <Icon
              itemKey={5}
              selectedMenu={selectedMenu}
              iconName={<IoMail color={selectedMenu === 5 ? "white" : "#6F80A0"} />}
          />
      ),
      href: '/messages'
  },
  {
      key: 6,
      label: "펀딩 관리",
      icon: (
          <Icon
              itemKey={6}
              selectedMenu={selectedMenu}
              iconName={<IoSettings color={selectedMenu === 6 ? "white" : "#6F80A0"} />}
          />
      ),
      href: '/settings'
  },
  {
      key: 7,
      label: "알림",
      icon: (
          <Icon
              itemKey={7}
              selectedMenu={selectedMenu}
              iconName={<IoNotifications color={selectedMenu === 7 ? "white" : "#6F80A0"} />}
          />
      ),
      href: '/notifications'
  },
  {
      key: 8,
      label: "투자 관리",
      icon: (
          <Icon
              itemKey={8}
              selectedMenu={selectedMenu}
              iconName={<IoPulse color={selectedMenu === 8 ? "white" : "#6F80A0"} />}
          />
      ),
      href: '/activity'
  },
  {
      key: 9,
      label: "작업",
      icon: (
          <Icon
              itemKey={9}
              selectedMenu={selectedMenu}
              iconName={<IoClipboard color={selectedMenu === 9 ? "white" : "#6F80A0"} />}
          />
      ),
      href: '/tasks'
  },
  {
      key: 10,
      label: "채권 관리",
      icon: (
          <Icon
              itemKey={10}
              selectedMenu={selectedMenu}
              iconName={<IoAnalytics color={selectedMenu === 10 ? "white" : "#6F80A0"} />}
          />
      ),
      href: '/analytics'
  },
  {
      key: 11,
      label: "전시/게시판 관리",
      icon: (
          <Icon
              itemKey={11}
              selectedMenu={selectedMenu}
              iconName={<IoHelpCircle color={selectedMenu === 11 ? "white" : "#6F80A0"} />}
          />
      ),
      href: '/support'
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
          zIndex: 2, 
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
              padding: "20px 10px 0px 12px",
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
            zIndex: !collapsed ? 3 : 1, // Ensure the header is above the sidebar
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
            padding: "30px",
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
