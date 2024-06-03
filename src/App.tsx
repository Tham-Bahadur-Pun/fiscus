import { ConfigProvider, theme } from "antd";
import { useContext, useEffect } from "react";
import { Route, Routes } from "react-router";
import { useNavigate } from "react-router-dom";
import "./App.css";
import { AuthContext, AuthProvider } from "./context/AuthContext";
import MyLayout from "./MyLayout";
import Home from "./pages/Home";
import MemberManagement from "./pages/MemberManagement";
import { SignIn } from "./pages/SignIn";
import locale from "antd/locale/ko_KR";
import dayjs from "dayjs";

import "dayjs/locale/zh-cn";

dayjs.locale("ko_KR");

function App() {
  const navigate = useNavigate();

  const { user } = useContext(AuthContext);
  useEffect(() => {
    user.id && user.password ? navigate("/dashboard") : navigate("/signin");
  }, [user]);
  return (
    <AuthProvider>
      <ConfigProvider
        locale={locale}
        theme={{
          token: {
            colorPrimary: "#414f66",
          },
          components: {
            Menu: {
              activeBarBorderWidth: 0,
              itemBorderRadius: 10,
              itemColor: "#b1b4bb",
              iconSize: 20,
              itemSelectedColor: "#414f66",
              itemHoverBg: "none",
              itemHoverColor: "none",
              itemSelectedBg: "#fff",
              itemActiveBg: "#fff",
              iconMarginInlineEnd: 12,
              itemHeight: 54,
              colorIcon: "#6F80A0",
            },
            Button: {
              textHoverBg: "none",
              defaultActiveColor: "none",
              defaultActiveBg: "none",
              defaultActiveBorderColor: "none",
              defaultBg: "#fff",
              defaultShadow: "none",
              primaryShadow: "none",
            },
            Radio: {
              wrapperMarginInlineEnd: 50,
              buttonPaddingInline: 6,
            },
            Select: {
              optionHeight: 40,
              optionPadding: "10px 20px",
            },
            Input: {
              paddingBlock: 8,
            },
            Table: {
              headerBg: "#EEF0F4",
              footerBg: "#EEF0F4",
            },
            Pagination: {
              itemBg: "EEF0F4",
            }
          },
        }}
      >
        <Routes>
          <Route path="signin" element={<SignIn />} />
          <Route path="dashboard" element={<MyLayout />}>
            <Route index element={<Home />} />
            <Route path="member-management" element={<MemberManagement />} />
          </Route>
        </Routes>
      </ConfigProvider>
    </AuthProvider>
  );
}

export default App;
