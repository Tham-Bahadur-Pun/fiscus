import { ConfigProvider as AntConfigProvider } from "antd";
import locale from "antd/locale/ko_KR";
import dayjs from "dayjs";
import "dayjs/locale/zh-cn";
import { ReactNode } from "react";

dayjs.locale("ko_KR");

const ConfigProvider = ({ children }: { children: ReactNode }) => {
  return (
    <AntConfigProvider
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
            buttonPaddingInline: 22,
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
            borderColor: "#fff",
            stickyScrollBarBg: "#63728F",
            stickyScrollBarBorderRadius: 200,
          },
          Pagination: {
            itemBg: "#F1F3F5",
          },
          Tabs: {
            itemSelectedColor: "#fff",
          },
        },
      }}
    >
      {children}
    </AntConfigProvider>
  );
};

export default ConfigProvider;
