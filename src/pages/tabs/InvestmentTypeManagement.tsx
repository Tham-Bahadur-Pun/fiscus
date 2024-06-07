import { Button, Flex, Select, Table, TableColumnsType } from "antd"
import ApprovalStatus from "../../components/ApprovalStatus";

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

const InvestmentTypeManagement = () => {

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
    <div style={{ marginLeft: '2rem', marginRight: '2rem', marginTop: '2rem' }}>
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
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <Flex justify="flex-start">
            <Button style={{ width: "100px", height: "40px" }} type="primary">
              저장
            </Button>
          </Flex>
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
        </div>
        <br></br>
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
            rowKey={(data) => data.NO}
          />
        </div>
      </div>
    </div>
  )
}

export default InvestmentTypeManagement