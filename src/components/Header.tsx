import { Avatar, Button, Flex, Input, Typography } from "antd";
import { CiSearch, CiShare1 } from "react-icons/ci";
import { IoSettingsOutline } from "react-icons/io5";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { TfiBell } from "react-icons/tfi";

const Header = ({
  collapsed,
  onCollapsed,
}: {
  collapsed: boolean;
  onCollapsed: () => void;
}) => {
  return (
    <Flex
      justify="space-between"
      className="container"
      align="center"
      style={{
        width: "90vw",
      marginTop: "0.5rem"
      }}
    >
      <Flex
        style={{ width: "40%", marginLeft: "3.5rem",}}
        align="center"
        gap={40}
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
              marginLeft: '4px'
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
            <Typography.Paragraph strong style={{ marginBottom: 0 }}>
              김관리님{" "}
            </Typography.Paragraph>
            <Typography.Paragraph>대출관리팀 </Typography.Paragraph>
          </Flex>
        </Flex>
      </Flex>
      <Flex gap={8} align="center" style={{ width: "60%" }} justify="flex-end">
        <Button icon={<TfiBell color="#babebd" size={20} />} size="large" />
        <Input
          prefix={<CiSearch size={25} color="#babebd" />}
          size="large"
          placeholder="메뉴 검색"
          style={{ width: "50%" }}
          type="search"
          onClick={()=> <div>hello</div>}
        >
          
        </Input>
        <Button icon={<CiShare1 color="#babebd" size={20} />} size="large" />
        <Button
          icon={<IoSettingsOutline color="#babebd" size={20} />}
          size="large"
        />
      </Flex>
    </Flex>
  );
};

export default Header;
