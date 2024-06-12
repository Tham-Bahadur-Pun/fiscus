import { Avatar, Button, Flex, Typography } from "antd";
import { CiShare1 } from "react-icons/ci";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import NotificationList from "./NotificationList";
import SearchList from "./SearchList";
import SettingList from "./SettingList";

const Header = ({
  collapsed,
  onCollapsed,
}: {
  collapsed: boolean;
  onCollapsed: () => void;
}) => {


  return (
    <Flex
      className="container"
      align="center"
      style={{
        width: "90vw",
        marginTop: "0.5rem",
      }}
    >
      <Flex
        style={{ marginLeft: "3.5rem" }}
        align="center"
        gap={20}
        flex="0.5 0 0"
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            src="https://main.d3kaistnyhy60t.amplifyapp.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.2d043f75.png&w=384&q=75"
            alt="company-logo"
            width="159px"
            height="29px"
          />
          <Button
            type="text"
            icon={
              collapsed ? (
                ""
              ) : (
                <MdOutlineKeyboardArrowLeft color="#A3A3A3" size={30} />
              )
            }
            onClick={onCollapsed}
            shape="circle"
            style={{
              fontSize: "16px",
              marginLeft: "4px",
            }}
          />
        </div>
        <Flex justify="center" align="center" gap={10}>
          <Avatar
            src="https://main.d3kaistnyhy60t.amplifyapp.com/_next/static/media/avatar.5e179e90.png"
            shape="circle"
            size={50}
            alt="user"
          />
          <Flex vertical style={{ marginTop: "1em" }}>
            <Typography.Paragraph
              strong
              style={{ marginBottom: 0, textWrap: "nowrap" }}
            >
              김관리님{" "}
            </Typography.Paragraph>
            <Typography.Paragraph style={{ textWrap: "nowrap" }}>
              대출관리팀{" "}
            </Typography.Paragraph>
          </Flex>
        </Flex>
      </Flex>

      <Flex gap={8} align="center"  justify="flex-end" flex="0.7 0 0">
        <NotificationList />
        <div style={{width:'50%'}}>
          <SearchList />
        </div>
        <Button icon={<CiShare1 color="#babebd" size={20} />} size="large" />
        <SettingList/>
      </Flex>
    </Flex>
  );
};

export default Header;
