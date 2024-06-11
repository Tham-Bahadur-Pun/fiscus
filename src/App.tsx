import { useContext, useEffect } from "react";
import { Route, Routes } from "react-router";
import { useNavigate } from "react-router-dom";
import "./App.css";
import { AuthContext, AuthProvider } from "./context/AuthContext";
import ConfigProvider from "./context/ConfigProvider";
import MyLayout from "./MyLayout";
import Home from "./pages/Home";
import MemberManagement from "./pages/MemberManagement/MemberManagement";
import MemberManagementDetail from "./pages/MemberManagement/MemberManagementDetail";
import { SignIn } from "./pages/SignIn";

function App() {
  const navigate = useNavigate();

  const { user } = useContext(AuthContext);
  useEffect(() => {
    user.id && user.password ? navigate("/dashboard") : navigate("/signin");
  }, [user]);

  return (
    <AuthProvider>
      <ConfigProvider>
        <Routes>
          <Route path="signin" element={<SignIn />} />
          <Route path="dashboard" element={<MyLayout />}>
            <Route index element={<Home />} />
            <Route path="member-management" element={<MemberManagement />} />
            <Route
              path="member-management/detail"
              element={<MemberManagementDetail />}
            />
          </Route>
        </Routes>
      </ConfigProvider>
    </AuthProvider>
  );
}

export default App;
