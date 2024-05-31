import { ConfigProvider, theme } from "antd";
import "./App.css";
import MyLayout from "./MyLayout";

function App() {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <ConfigProvider
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
            itemSelectedColor: '#414f66',
            itemHoverBg: 'none',
            itemHoverColor: 'none',
            itemSelectedBg: '#fff',
            itemActiveBg: '#fff',
            iconMarginInlineEnd: 12,
            itemHeight: 54,
            colorIcon: '#6F80A0'
          },
          Button: {
            textHoverBg: 'none',
            defaultActiveColor: 'none',
            defaultActiveBg: 'none',
            defaultActiveBorderColor: 'none',
            defaultBg: '#fff'
          }
        },
      }}
    >
      <div style={{ background: colorBgContainer }}>
        <MyLayout />
      </div>
    </ConfigProvider>
  );
}

export default App;
