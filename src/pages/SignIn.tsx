import { Button, Col, Form, FormProps, Input, Row } from "antd";
import { useContext, useEffect } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router";

type FieldType = {
  userId: string;
  password: string;
};

export const SignIn = () => {
  const { user, setUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
    setUser((user) => ({
      id: values.userId ?? user.id,
      password: values.password ?? user.password,
    }));

    if (values.password) {
      navigate("/dashboard");
    }
  };

  const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (
    errorInfo
  ) => {
    console.log("Failed:", errorInfo);
  };

  useEffect(() => {
    document.title = "Fiscus | Login";
  });

  return (
    <Row>
      <Col span={12}>
        <div
          style={{
            height: "100vh",
            maxWidth: "100%",
            backgroundSize: "cover",
            backgroundPosition: "bottom",
            backgroundImage:
              "url('https://main.d3kaistnyhy60t.amplifyapp.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogin-cover.fc484909.png&w=3840&q=75')",
            padding: "40px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <div>
            <img
              src="https://main.d3kaistnyhy60t.amplifyapp.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo-white.09a16de6.png&w=256&q=75"
              alt="company-logo"
              width="148px"
              height="26px"
            />
            <div style={{ color: "hashtag#fff", justifySelf: "center" }}>
              <h1
                style={{
                  fontSize: "36px",
                  fontWeight: "700",
                  lineHeight: "54px",
                  marginTop: "129px",
                }}
              >
                안녕하세요.
              </h1>
              <h1
                style={{
                  fontSize: "36px",
                  fontWeight: "700",
                  lineHeight: "54px",
                }}
              >
                P2P 투자/대출 관리 시스템 입니다.
              </h1>
            </div>
          </div>
          <div
            style={{ fontSize: "20px", display: "flex", alignItems: "center" }}
          >
            <span style={{ color: "hashtag#fff", marginRight: "0.6em" }}>
              이 시스템은
            </span>
            <img
              src="https://main.d3kaistnyhy60t.amplifyapp.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fmufin-logo.db18347d.png&w=256&q=75"
              alt="tes"
              width="150px"
              height="24.5px"
            />
            <span style={{ marginLeft: "0.6em" }}>
              의 FiscusOn2 솔루션으로 제작되었습니다.
            </span>
          </div>
        </div>
      </Col>
      <Col span={12}>
        <div
          style={{
            height: "100vh",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div
            style={{
              display: "flex",
              flex: 2 / 5,
              alignItems: "flex-end",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                textAlign: "center",
                fontSize: "1.5rem",
                fontWeight: "bold",
              }}
            >
              <p>내부직원 전용 서비스입니다.</p>
              <p style={{ marginTop: "0.4em" }}> 로그인 후 사용해주세요.</p>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flex: 3 / 5,
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Form
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              style={{ width: "45%" }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  fontWeight: "500",
                  marginBottom: "0.5em",
                }}
              >
                <p style={{ fontSize: "20px" }}>
                  {user.id ? ` ID: ${user.id}` : ""}
                </p>
                <p style={{ fontSize: "14px" }}>IP : 192.168.1.1</p>
              </div>
              {!user.id && (
                <Form.Item<FieldType>
                  name="userId"
                  rules={[
                    { required: true, message: "아이디가 일치하지 않습니다." },
                  ]}
                >
                  <Input
                    size="large"
                    placeholder="아이디 입력"
                    style={{ height: "59px" }}
                    name="userId"
                  />
                </Form.Item>
              )}
              {user.id && (
                <Form.Item<FieldType>
                  name="password"
                  rules={[
                    {
                      required: true,
                      message: "비밀번호가 일치하지 않습니다.",
                    },
                  ]}
                >
                  <Input
                    size="large"
                    type="password"
                    placeholder="아이디 입력"
                    style={{ height: "59px" }}
                  />
                </Form.Item>
              )}
              <Button
                type="primary"
                size="large"
                block
                htmlType="submit"
                style={{
                  height: "59px",
                  marginBottom: "1em",
                  marginTop: "0.6em",
                }}
              >
                다음
              </Button>
            </Form>
            <div style={{ textAlign: "center" }}>
              <p>허가받지 않은 사용자가 접근을 시도할 경우</p>
              <p>법적 책임을 질 수 있습니다.</p>
            </div>
          </div>
        </div>
      </Col>
    </Row>
  );
};
