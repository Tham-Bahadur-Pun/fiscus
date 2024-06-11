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
import { useEffect } from "react";
import ApprovalStatus from "../components/ApprovalStatus";
import ToggleButton from "../components/ToggleButton";
import Dot from "../components/Dot";

interface DataType {
  NO: React.Key;
  회원번호: string;
  "회원명/법인명": string;
  "휴대폰 번호": string;
  이메일ID: string;
  승인여부: string;
  휴면상태: string;
  구분: string;
  유형: string;
  GUID: string;
}
const labelStyle = {
  fontSize: "1rem",
};
const Home = () => {
  useEffect(() => {
    document.title = "Home | Fiscus";
  }, []);

  const { RangePicker } = DatePicker;

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

  const channel = [
    {
      label: "채널",
      value: "채널",
    },
    {
      label: "PC",
      value: "PC",
    },
    {
      label: "Mobile App",
      value: "Mobile App",
    },
    {
      label: "Mobile Web",
      value: "Mobile Web",
    },
  ];

  const channel2 = [
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

  const posting = [
    {
      label: "전체",
      value: "전체",
    },
    {
      label: "게시",
      value: "게시",
    },
    {
      label: "비게시",
      value: "비게시",
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
    },
    {
      title: "회원명/법인명",
      dataIndex: "회원명/법인명",
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
      title: "승인여부",
      dataIndex: "승인여부",
      render: (value) => <ApprovalStatus status={value} />,
    },
    {
      title: "휴면상태",
      dataIndex: "휴면상태",
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
  ];

  const data: DataType[] = [
    {
      NO: 1,
      회원번호: "Abc123",
      "회원명/법인명": "김마리",
      "휴대폰 번호": "010-1234-5678",
      이메일ID: "aaaaaaaabc@naver.com",
      승인여부: "승인완료",
      휴면상태: "정상",
      구분: "투자",
      유형: "일반개인",
      GUID: "U1JtXgAj5Q72Wn",
    },
    {
      NO: 2,
      회원번호: "Abc123",
      "회원명/법인명": "김마리",
      "휴대폰 번호": "010-1234-5678",
      이메일ID: "aaaaaaaabc@naver.com",
      승인여부: "승인대기",
      휴면상태: "정상",
      구분: "투자",
      유형: "개인",
      GUID: "U1JtXgAj5Q72Wn",
    },
    {
      NO: 3,
      회원번호: "Abc123",
      "회원명/법인명": "김마리",
      "휴대폰 번호": "010-1234-5678",
      이메일ID: "aaaaaaaabc@naver.com",
      승인여부: "승인거절",
      휴면상태: "정상",
      구분: "투자",
      유형: "일반개인",
      GUID: "U1JtXgAj5Q72Wn",
    },
    {
      NO: 4,
      회원번호: "Abc123",
      "회원명/법인명": "김마리",
      "휴대폰 번호": "010-1234-5678",
      이메일ID: "aaaaaaaabc@naver.com",
      승인여부: "승인대기",
      휴면상태: "정상",
      구분: "투자",
      유형: "개인",
      GUID: "U1JtXgAj5Q72Wn",
    },
    {
      NO: 5,
      회원번호: "Abc123",
      "회원명/법인명": "김마리",
      "휴대폰 번호": "010-1234-5678",
      이메일ID: "aaaaaaaabc@naver.com",
      승인여부: "승인대기",
      휴면상태: "정상",
      구분: "투자",
      유형: "일반개인",
      GUID: "U1JtXgAj5Q72Wn",
    },
    {
      NO: 6,
      회원번호: "Abc123",
      "회원명/법인명": "김마리",
      "휴대폰 번호": "010-1234-5678",
      이메일ID: "aaaaaaaabc@naver.com",
      승인여부: "승인대기",
      휴면상태: "정상",
      구분: "투자",
      유형: "개인",
      GUID: "U1JtXgAj5Q72Wn",
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
    <div className="container">
      <h1 className="header">회원 관리</h1>
      <div className="formContainer">
        <form action="">
          <Row gutter={[3, 3]} align="middle" className="formRow">
            <Col
              span={2}
              style={{ display: "flex", alignItems: "center", gap: "10px" }}
            >
              <Dot />
              <span className="label">가입일</span>
            </Col>
            <Col>
              <ToggleButton items={joinDates} />
            </Col>
            <Col span={12}>
              <RangePicker
                size="large"
                style={{ fontWeight: 600, fontSize: "1rem", width: "100%" }}
              />
            </Col>
          </Row>

          <Row gutter={[3, 3]} align="middle" className="formRow">
            <Col span={12}>
              <Row align="middle">
                <Col
                  span={4}
                  style={{ display: "flex", alignItems: "center", gap: "10px" }}
                >
                  <Dot />
                  <span className="label">채널</span>
                </Col>
                <Col span={18}>
                  <Checkbox.Group options={channel} />
                </Col>
              </Row>
            </Col>
            <Col span={12}>
              <Row align="middle">
                <Col
                  span={4}
                  style={{ display: "flex", alignItems: "center", gap: "10px" }}
                >
                  <Dot />
                  <span className="label">채널</span>
                </Col>
                <Col span={18}>
                  <Checkbox.Group options={channel2} />
                </Col>
              </Row>
            </Col>
          </Row>

          <Row gutter={[3, 3]} align="middle" className="formRow">
            <Col span={12}>
              <Row align="middle">
                <Col
                  span={4}
                  style={{ display: "flex", alignItems: "center", gap: "10px" }}
                >
                  <Dot />
                  <span className="label">게시여부</span>
                </Col>
                <Col span={18}>
                  <Checkbox.Group options={posting} />
                </Col>
              </Row>
            </Col>
          </Row>

          <Row gutter={[3, 3]} align="middle">
            <Col
              span={2}
              style={{ display: "flex", alignItems: "center", gap: "10px" }}
            >
              <Dot />
              <span className="label">검색</span>
            </Col>
            <Col span={4}>
              <Select
                style={{ width: "100%" }}
                options={[{ value: "회원명", label: "회원명" }]}
                size="large"
                dropdownStyle={{ padding: 0 }}
              />
            </Col>
            <Col span={16}>
              <Input
                placeholder="검색어를 입력해주세요."
                style={{ width: "100%" }}
              />
            </Col>
          </Row>
        </form>
      </div>

      <Flex align="center" justify="space-between" className="searchContainer">
        <div style={{ display: "flex", justifyContent: "center", flexGrow: 1 }}>
          <Button className="searchButton" type="primary" size="large">
            검색
          </Button>
        </div>
        <Button className="resetButton">초기화</Button>
      </Flex>

      <div className="tableContainer">
        <Flex justify="space-between" align="center" className="tableHeader">
          <div className="tableTitle">
            <span className="tableTitleText">회원 목록</span>
            <span className="tableTitleCount">
              (총 100명 | 승인대기 <span style={{ color: "red" }}>10</span>명)
            </span>
          </div>
          <div className="tableHeaderRight">
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
            <Button className="excelButton" disabled>
              엑셀 다운로드
            </Button>
          </div>
        </Flex>
        <div className="tableDivider"></div>
        <Flex justify="flex-end" className="tableFooter">
          <div className="tableFooterActions">
            <span>선택한 0명 회원</span>
            <Select
              style={{ width: 120 }}
              defaultValue="승인상태 변경"
              options={[{ value: "승인상태 변경", label: "승인상태 변경" }]}
              size="large"
              dropdownStyle={{ padding: 0 }}
            />
            <Button className="saveButton" type="primary">
              저장
            </Button>
          </div>
        </Flex>
        <Table
          size="large"
          rowSelection={{ type: "checkbox", ...rowSelection }}
          columns={columns}
          dataSource={data}
          pagination={{ position: ["bottomCenter"] }}
          rowKey={(data) => data.NO}
          rowClassName="tableRow"
        />
      </div>
    </div>
  );
};

export default Home;
