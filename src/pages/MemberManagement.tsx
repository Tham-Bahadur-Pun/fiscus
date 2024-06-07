import { useEffect } from "react";
import Dot from "../components/Dot";
import ToggleButton from "../components/ToggleButton";
import {
  Button,
  Checkbox,
  Col,
  DatePicker,
  Flex,
  Input,
  Row,
  Select,
  Table,
  TableColumnsType,
} from "antd";
import ApprovalStatus from "../components/ApprovalStatus";
import { Link } from "react-router-dom";
import './MemeberManagement.css'
interface DataType {
  NO: React.Key;
  회원번호: string;
  "회원명/법인명": string;
  "휴대폰 번호": string;
  이메일ID: string;
  구분: string;
  유형: string;
  GUID: string;
  "투자/대출건수": string;
  상환건수: string;
  연체건수: string;
  투자유형승인여부?: string;
  휴면상태: string;
  블랙리스트상태: string;
  가입일시: string;
}

const layoutStyle = {
  background: "#F4F5F6",
  padding: "12px 20px",
  borderRadius: "10px",
};

const labelStyle = {
  marginRight: "2em",
  fontSize: "1rem",
  width: "111px",
};

const searchLabelStyle = {
  marginRight: "2em",
  fontSize: "1rem",
  width: "111px",
};

const MemberManagement = () => {
  useEffect(() => {
    document.title = "Member Management | Fiscus";
  }, []);

  const { RangePicker } = DatePicker;
  const managementData = [
    {
      label: "전체",
      value: "100",
    },
    {
      label: "승인대기",
      value: "10",
    },
    {
      label: "승인완료",
      value: "80",
    },
    {
      label: "승인거부",
      value: "10",
    },
  ];

  const joinDates = [
    {
      label: "전체",
      value: "전체",
    },
    {
      label: "오늘",
      value: "오늘",
    },
    {
      label: "어제",
      value: "어제",
    },
    {
      label: "1주일",
      value: "1주일",
    },
    {
      label: "1개월",
      value: "1개월",
    },
    {
      label: "3개월",
      value: "3개월",
    },
  ];

  const dormantState = [
    {
      label: "전체",
      value: "전체",
    },
    {
      label: "정상",
      value: "정상",
    },
    {
      label: "휴면",
      value: "휴면",
    },
  ];

  const blackListStatus = [
    {
      label: "전체",
      value: "전체",
    },
    {
      label: "정상",
      value: "정상",
    },
    {
      label: "블랙리스트",
      value: "블랙리스트",
    },
  ];

  const investorType = [
    {
      label: "전체",
      value: "전체",
    },
    {
      label: "일반개인",
      value: "일반개인",
    },
    {
      label: "소득적격",
      value: "소득적격",
    },
    {
      label: "개인전문",
      value: "개인전문",
    },
    {
      label: "법인",
      value: "법인",
    },
    {
      label: "P2P온투",
      value: "P2P온투",
    },
  ];

  const investmentStatus = [
    {
      label: "전체",
      value: "전체",
    },
    {
      label: "투자중",
      value: "투자중",
    },
    {
      label: "없음",
      value: "없음",
    },
  ];

  const loanType = [
    {
      label: "전체",
      value: "전체",
    },
    {
      label: "개인",
      value: "개인",
    },
    {
      label: "개인사업자",
      value: "개인사업자",
    },
    {
      label: "법인",
      value: "법인",
    },
  ];

  const loanAvailability = [
    {
      label: "전체",
      value: "전체",
    },
    {
      label: "대출중",
      value: "대출중",
    },
    {
      label: "없음",
      value: "없음",
    },
  ];

  const investmentTypeApproval = [
    {
      label: "전체",
      value: "전체",
    },
    {
      label: "승인대기",
      value: "승인대기",
    },
    {
      label: "승인완료",
      value: "승인완료",
    },
    {
      label: "승인거부",
      value: "승인거부",
    },
  ];
  const loanStatus = [
    {
      label: "전체",
      value: "전체",
    },
    {
      label: "상환중",
      value: "상환중",
    },
    {
      label: "상환완료",
      value: "상환완료",
    },
    {
      label: "연체중",
      value: "연체중",
    },
    {
      label: "중도상환완료",
      value: "중도상환완료",
    },
    {
      label: "만기상환완료",
      value: "만기상환완료",
    },
    {
      label: "기한이익상실 예정",
      value: "기한이익상실 예정",
    },
    {
      label: "기한이익상실",
      value: "기한이익상실",
    },
    {
      label: "화해",
      value: "화해",
    },
  ];

  const columns: TableColumnsType<DataType> = [
    {
      title: "NO",
      dataIndex: "NO",
    },
    {
      title: "회원번호",
      dataIndex: "회원번호",
      render: (text) => <Link to="./detail" className="link" style={{color: 'black'}}>{text}</Link>,
    },
    {
      title: "회원명/법인명",
      dataIndex: "회원명/법인명",
      render: (text) => <Link to="./detail" className="link" style={{color: 'black'}}>{text}</Link>,
    },
    {
      title: "휴대폰 번호",
      dataIndex: "휴대폰 번호",
    },
    {
      title: "이메일ID",
      dataIndex: "이메일ID",
    },
    {
      title: "구분",
      dataIndex: "구분",
    },
    {
      title: "유형",
      dataIndex: "유형",
    },
    {
      title: "GUID",
      dataIndex: "GUID",
    },
    {
      title: "투자/대출건수",
      dataIndex: "투자/대출건수",
    },
    {
      title: "상환건수",
      dataIndex: "상환건수",
    },
    {
      title: "연체건수",
      dataIndex: "연체건수",
    },
    {
      title: "투자유형승인여부",
      dataIndex: "투자유형승인여부",
      render: (value) => <ApprovalStatus status={value} />,
    },
    {
      title: "휴면상태",
      dataIndex: "휴면상태",
    },
    {
      title: "블랙리스트상태",
      dataIndex: "블랙리스트상태",
    },
    {
      title: "가입일시",
      dataIndex: "가입일시",
    },
  ];

  const data = [
    {
      NO: 1,
      회원번호: "Abc123",
      "회원명/법인명": "김마리",
      "휴대폰 번호": "010-1234-5678",
      이메일ID: "aaaaaaaabc@naver.com",
      구분: "투자",
      유형: "일반개인",
      GUID: "U1JtXgAj5Q72Wn",
      "투자/대출건수": "10건",
      상환건수: "5건",
      연체건수: "2건",
      투자유형승인여부: "승인완료",
      휴면상태: "정상",
      블랙리스트상태: "정상",
      가입일시: "2023-01-10 09:00:00",
    },
    {
      NO: 2,
      회원번호: "Abc123",
      "회원명/법인명": "김마리",
      "휴대폰 번호": "010-1234-5678",
      이메일ID: "aaaaaaaabc@naver.com",
      구분: "투자",
      유형: "일반개인",
      GUID: "U1JtXgAj5Q72Wn",
      "투자/대출건수": "10건",
      상환건수: "5건",
      연체건수: "2건",
      투자유형승인여부: "승인대기",
      휴면상태: "정상",
      블랙리스트상태: "블랙리스트",
      가입일시: "2023-01-10 09:00:00",
    },
    {
      NO: 3,
      회원번호: "Abc123",
      "회원명/법인명": "김마리",
      "휴대폰 번호": "010-1234-5678",
      이메일ID: "aaaaaaaabc@naver.com",
      구분: "투자",
      유형: "일반개인",
      GUID: "U1JtXgAj5Q72Wn",
      "투자/대출건수": "10건",
      상환건수: "5건",
      연체건수: "2건",
      투자유형승인여부: "승인거절",
      휴면상태: "정상",
      블랙리스트상태: "정상",
      가입일시: "2023-01-10 09:00:00",
    },
    {
      NO: 4,
      회원번호: "Abc123",
      "회원명/법인명": "김마리",
      "휴대폰 번호": "010-1234-5678",
      이메일ID: "aaaaaaaabc@naver.com",
      구분: "투자",
      유형: "일반개인",
      GUID: "U1JtXgAj5Q72Wn",
      "투자/대출건수": "10건",
      상환건수: "5건",
      연체건수: "2건",
      투자유형승인여부: "승인대기",
      휴면상태: "정상",
      블랙리스트상태: "블랙리스트",
      가입일시: "2023-01-10 09:00:00",
    },
    {
      NO: 5,
      회원번호: "Abc123",
      "회원명/법인명": "김마리",
      "휴대폰 번호": "010-1234-5678",
      이메일ID: "aaaaaaaabc@naver.com",
      구분: "투자",
      유형: "일반개인",
      GUID: "U1JtXgAj5Q72Wn",
      "투자/대출건수": "10건",
      상환건수: "5건",
      연체건수: "2건",
      투자유형승인여부: "승인대기",
      휴면상태: "정상",
      블랙리스트상태: "정상",
      가입일시: "2023-01-10 09:00:00",
    },
    {
      NO: 6,
      회원번호: "Abc123",
      "회원명/법인명": "김마리",
      "휴대폰 번호": "010-1234-5678",
      이메일ID: "aaaaaaaabc@naver.com",
      구분: "투자",
      유형: "일반개인",
      GUID: "U1JtXgAj5Q72Wn",
      "투자/대출건수": "10건",
      상환건수: "5건",
      연체건수: "2건",
      투자유형승인여부: "승인대기",
      휴면상태: "정상",
      블랙리스트상태: "블랙리스트",
      가입일시: "2023-01-10 09:00:00",
    },
    {
      NO: 7,
      회원번호: "Abc123",
      "회원명/법인명": "김마리",
      "휴대폰 번호": "010-1234-5678",
      이메일ID: "aaaaaaaabc@naver.com",
      구분: "투자",
      유형: "일반개인",
      GUID: "U1JtXgAj5Q72Wn",
      "투자/대출건수": "10건",
      상환건수: "5건",
      연체건수: "2건",
      투자유형승인여부: "승인대기",
      휴면상태: "정상",
      블랙리스트상태: "정상",
      가입일시: "2023-01-10 09:00:00",
    },
    {
      NO: 8,
      회원번호: "Abc123",
      "회원명/법인명": "김마리",
      "휴대폰 번호": "010-1234-5678",
      이메일ID: "aaaaaaaabc@naver.com",
      구분: "투자",
      유형: "일반개인",
      GUID: "U1JtXgAj5Q72Wn",
      "투자/대출건수": "10건",
      상환건수: "5건",
      연체건수: "2건",
      투자유형승인여부: "승인대기",
      휴면상태: "정상",
      블랙리스트상태: "블랙리스트",
      가입일시: "2023-01-10 09:00:00",
    },
    {
      NO: 9,
      회원번호: "Abc123",
      "회원명/법인명": "김마리",
      "휴대폰 번호": "010-1234-5678",
      이메일ID: "aaaaaaaabc@naver.com",
      구분: "투자",
      유형: "일반개인",
      GUID: "U1JtXgAj5Q72Wn",
      "투자/대출건수": "10건",
      상환건수: "5건",
      연체건수: "2건",
      투자유형승인여부: "승인대기",
      휴면상태: "정상",
      블랙리스트상태: "정상",
      가입일시: "2023-01-10 09:00:00",
    },
    {
      NO: 10,
      회원번호: "Abc123",
      "회원명/법인명": "김마리",
      "휴대폰 번호": "010-1234-5678",
      이메일ID: "aaaaaaaabc@naver.com",
      구분: "투자",
      유형: "일반개인",
      GUID: "U1JtXgAj5Q72Wn",
      "투자/대출건수": "10건",
      상환건수: "5건",
      연체건수: "2건",
      투자유형승인여부: "승인대기",
      휴면상태: "정상",
      블랙리스트상태: "블랙리스트",
      가입일시: "2023-01-10 09:00:00",
    },
    {
      NO: 11,
      회원번호: "Abc123",
      "회원명/법인명": "김마리",
      "휴대폰 번호": "010-1234-5678",
      이메일ID: "aaaaaaaabc@naver.com",
      구분: "투자",
      유형: "일반개인",
      GUID: "U1JtXgAj5Q72Wn",
      "투자/대출건수": "10건",
      상환건수: "5건",
      연체건수: "2건",
      투자유형승인여부: "승인대기",
      휴면상태: "정상",
      블랙리스트상태: "정상",
      가입일시: "2023-01-10 09:00:00",
    },
    {
      NO: 12,
      회원번호: "Abc123",
      "회원명/법인명": "김마리",
      "휴대폰 번호": "010-1234-5678",
      이메일ID: "aaaaaaaabc@naver.com",
      구분: "투자",
      유형: "일반개인",
      GUID: "U1JtXgAj5Q72Wn",
      "투자/대출건수": "10건",
      상환건수: "5건",
      연체건수: "2건",
      투자유형승인여부: "승인대기",
      휴면상태: "정상",
      블랙리스트상태: "블랙리스트",
      가입일시: "2023-01-10 09:00:00",
    },
    {
      NO: 13,
      회원번호: "Abc123",
      "회원명/법인명": "김마리",
      "휴대폰 번호": "010-1234-5678",
      이메일ID: "aaaaaaaabc@naver.com",
      구분: "투자",
      유형: "일반개인",
      GUID: "U1JtXgAj5Q72Wn",
      "투자/대출건수": "10건",
      상환건수: "5건",
      연체건수: "2건",
      투자유형승인여부: "승인대기",
      휴면상태: "정상",
      블랙리스트상태: "정상",
      가입일시: "2023-01-10 09:00:00",
    },
    {
      NO: 14,
      회원번호: "Abc123",
      "회원명/법인명": "김마리",
      "휴대폰 번호": "010-1234-5678",
      이메일ID: "aaaaaaaabc@naver.com",
      구분: "투자",
      유형: "일반개인",
      GUID: "U1JtXgAj5Q72Wn",
      "투자/대출건수": "10건",
      상환건수: "5건",
      연체건수: "2건",
      투자유형승인여부: "승인대기",
      휴면상태: "정상",
      블랙리스트상태: "정상",
      가입일시: "2023-01-10 09:00:00",
    },
    {
      NO: 15,
      회원번호: "Abc123",
      "회원명/법인명": "김마리",
      "휴대폰 번호": "010-1234-5678",
      이메일ID: "aaaaaaaabc@naver.com",
      구분: "투자",
      유형: "일반개인",
      GUID: "U1JtXgAj5Q72Wn",
      "투자/대출건수": "10건",
      상환건수: "5건",
      연체건수: "2건",
      투자유형승인여부: "승인대기",
      휴면상태: "정상",
      블랙리스트상태: "블랙리스트",
      가입일시: "2023-01-10 09:00:00",
    },
    {
      NO: 16,
      회원번호: "Abc123",
      "회원명/법인명": "김마리",
      "휴대폰 번호": "010-1234-5678",
      이메일ID: "aaaaaaaabc@naver.com",
      구분: "투자",
      유형: "일반개인",
      GUID: "U1JtXgAj5Q72Wn",
      "투자/대출건수": "10건",
      상환건수: "5건",
      연체건수: "2건",
      투자유형승인여부: "승인대기",
      휴면상태: "정상",
      블랙리스트상태: "블랙리스트",
      가입일시: "2023-01-10 09:00:00",
    },
    {
      NO: 17,
      회원번호: "Abc123",
      "회원명/법인명": "김마리",
      "휴대폰 번호": "010-1234-5678",
      이메일ID: "aaaaaaaabc@naver.com",
      구분: "투자",
      유형: "일반개인",
      GUID: "U1JtXgAj5Q72Wn",
      "투자/대출건수": "10건",
      상환건수: "5건",
      연체건수: "2건",
      투자유형승인여부: "승인대기",
      휴면상태: "정상",
      블랙리스트상태: "정상",
      가입일시: "2023-01-10 09:00:00",
    },
    {
      NO: 18,
      회원번호: "Abc123",
      "회원명/법인명": "김마리",
      "휴대폰 번호": "010-1234-5678",
      이메일ID: "aaaaaaaabc@naver.com",
      구분: "투자",
      유형: "일반개인",
      GUID: "U1JtXgAj5Q72Wn",
      "투자/대출건수": "10건",
      상환건수: "5건",
      연체건수: "2건",
      투자유형승인여부: "승인대기",
      휴면상태: "정상",
      블랙리스트상태: "정상",
      가입일시: "2023-01-10 09:00:00",
    },
    {
      NO: 19,
      회원번호: "Abc123",
      "회원명/법인명": "김마리",
      "휴대폰 번호": "010-1234-5678",
      이메일ID: "aaaaaaaabc@naver.com",
      구분: "투자",
      유형: "일반개인",
      GUID: "U1JtXgAj5Q72Wn",
      "투자/대출건수": "10건",
      상환건수: "5건",
      연체건수: "2건",
      투자유형승인여부: "승인대기",
      휴면상태: "정상",
      블랙리스트상태: "정상",
      가입일시: "2023-01-10 09:00:00",
    },
    {
      NO: 20,
      회원번호: "Abc123",
      "회원명/법인명": "김마리",
      "휴대폰 번호": "010-1234-5678",
      이메일ID: "aaaaaaaabc@naver.com",
      구분: "투자",
      유형: "일반개인",
      GUID: "U1JtXgAj5Q72Wn",
      "투자/대출건수": "10건",
      상환건수: "5건",
      연체건수: "2건",
      투자유형승인여부: "승인대기",
      휴면상태: "정상",
      블랙리스트상태: "블랙리스트",
      가입일시: "2023-01-10 09:00:00",
    },
  ];

  const rowSelection = {
    onChange: (selectedRowKeys: React.Key[], selectedRows: DataType[]) => {
      console.log(
        `selectedRowKeys: ${selectedRowKeys}`,
        "selectedRows: ",
        selectedRows
      );
    },
  };

  return (
    <div>
      {" "}
      <h1 style={{ fontSize: "1.5rem", marginBottom: "1em" }}>회원 관리</h1>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          paddingBlock: "24px",
          border: "1px solid #eef0f4",
          borderRadius: "10px",
          marginBottom: "1em",
        }}
      >
        {managementData.map((data, index) => (
          <div
            key={data.value}
            style={{
              borderRight:
                managementData.length === index ? "" : "1px solid #eef0f4",
              textAlign: "center",
              width: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              paddingBlock: "24px",
              gap: 10,
            }}
          >
            <p style={{ fontSize: "1rem", fontWeight: 600 }}>{data.label}</p>
            <div>
              <span
                style={{
                  fontSize: "30px",
                  fontWeight: 600,
                  textDecoration: "underline",
                  color: "#127cc1",
                }}
              >
                {data.value}
              </span>
              명
            </div>
          </div>
        ))}
      </div>
      <div style={layoutStyle}>
        {/* 1 */}
        <Row gutter={[3, 3]} align="middle" style={{ marginBottom: "0.8em" }}>
          <Col>
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <Dot />
              <span style={labelStyle}>가입일</span>
            </div>
          </Col>
          <Col>
            <ToggleButton items={joinDates} />
          </Col>
          <Col flex="auto">
            <RangePicker
              size="large"
              style={{ fontWeight: 600, fontSize: "1rem", width: "100%" }}
            />
          </Col>
        </Row>

        {/* 2 */}
        <Row gutter={[3, 3]} align="middle" style={{ marginBottom: "0.8em" }}>
          <Col span={14}>
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <Dot />
              <span style={labelStyle}>휴면상태</span>
              <Checkbox.Group options={dormantState} />
            </div>
          </Col>
          <Col span={10}>
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <Dot />
              <span style={labelStyle}>블랙리스트 상태</span>
              <Checkbox.Group options={blackListStatus} />
            </div>
          </Col>
        </Row>

        {/* 3 */}
        <Row gutter={[3, 3]} align="middle" style={{ marginBottom: "0.8em" }}>
          <Col span={14}>
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <Dot />
              <span style={labelStyle}>투자자유형</span>
              <Checkbox.Group options={investorType} />
            </div>
          </Col>
          <Col span={10}>
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <Dot />
              <span style={labelStyle}>투자여부</span>
              <Checkbox.Group options={investmentStatus} />
            </div>
          </Col>
        </Row>

        {/* 4 */}
        <Row gutter={[3, 3]} align="middle" style={{ marginBottom: "0.8em" }}>
          <Col span={14}>
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <Dot />
              <span style={labelStyle}>대출자유형</span>
              <Checkbox.Group options={loanType} />
            </div>
          </Col>
          <Col span={10}>
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <Dot />
              <span style={labelStyle}>대출여부</span>
              <Checkbox.Group options={loanAvailability} />
            </div>
          </Col>
        </Row>

        {/* 5 */}
        <Row gutter={[3, 3]} align="middle" style={{ marginBottom: "0.8em" }}>
          <Col>
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <Dot />
              <span style={labelStyle}>투자유형승인여부</span>
              <Checkbox.Group options={investmentTypeApproval} />
            </div>
          </Col>
        </Row>

        {/* 6 */}
        <Row gutter={[3, 3]} align="middle" style={{ marginBottom: "0.8em" }}>
          <Col>
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <Dot />
              <span style={labelStyle}>투자/대출상태</span>
              <Checkbox.Group options={loanStatus} />
            </div>
          </Col>
        </Row>

        {/* 7 */}
        <Row gutter={[3, 3]} align="middle">
          <Col span={24}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                width: "100%",
              }}
            >
              <Dot />
              <span style={searchLabelStyle}>검색</span>
              <Select
                style={{ width: 120 }}
                options={[{ value: "회원명", label: "회원명" }]}
                size="large"
                dropdownStyle={{ padding: 0 }}
              />
              <Input
                placeholder="검색어를 입력해주세요."
                style={{ width: "75%" }}
              />
            </div>
          </Col>
        </Row>
      </div>
      <Flex
        align="center"
        justify="space-between"
        style={{ marginTop: "1em", width: "100%" }}
      >
        <div style={{ display: "flex", justifyContent: "center", flexGrow: 1 }}>
          <Button
            style={{ height: "53px", width: "160px" }}
            type="primary"
            size="large"
          >
            검색
          </Button>
        </div>
        <Button style={{ width: "100px", height: "40px" }}>초기화</Button>
      </Flex>
      <div style={{ marginTop: "30px" }}>
        <Flex
          justify="space-between"
          align="center"
          style={{ marginBottom: "12px" }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <span style={{ fontSize: "20px", fontWeight: "600" }}>
              회원 목록
            </span>
            <span style={{ fontSize: "14px", fontWeight: "500" }}>
              (총 100명 | 승인대기 <span style={{ color: "red" }}>10</span>명)
            </span>
          </div>
          <div style={{ display: "flex", gap: "10px" }}>
            <Select
              defaultValue="가입일시순"
              style={{ width: 120 }}
              options={[{ value: "가입일시순", label: "가입일시순" }]}
              size="large"
              dropdownStyle={{ padding: 0 }}
            />
            <Select
              style={{ width: 120 }}
              defaultValue="50개씩 보기"
              options={[{ value: "50개씩 보기", label: "50개씩 보기" }]}
              size="large"
              dropdownStyle={{ padding: 0 }}
            />
            <Button style={{ width: "100px", height: "40px" }} disabled>
              엑셀 다운로드
            </Button>
          </div>
        </Flex>
        <div style={{ height: "1px", background: "#EEF0F4" }}></div>
        <Flex
          justify="flex-end"
          style={{ marginTop: "6px", marginBottom: "8px" }}
        >
          <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
            <span>선택한 0명 회원</span>
            <Select
              style={{ width: 120 }}
              defaultValue="승인상태 변경"
              options={[{ value: "승인상태 변경", label: "승인상태 변경" }]}
              size="large"
              dropdownStyle={{ padding: 0 }}
            />
            <Button style={{ width: "100px", height: "40px" }} type="primary">
              저장
            </Button>
          </div>
        </Flex>
        <div>
          <Table
            size="large"
            rowSelection={{
              type: "checkbox",
              ...rowSelection,
            }}
            columns={columns}
            dataSource={data}
            pagination={{ position: ["bottomCenter"] }}
            scroll={{ x: 1700 }}
            rowKey={(data) => data.NO}
          />
        </div>
      </div>
    </div>
  );
};

export default MemberManagement;
