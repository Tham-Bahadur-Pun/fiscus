import { Button, Flex, Select, Table, TableColumnsType } from "antd";
import ApprovalStatus from "../../components/ApprovalStatus";

interface DataType {
  NO: React.Key;
  기존유형: string;
  신청유형: string;
  제출서류: string;
  신청일시: string;
  승인여부: string;
  승인거부사유: string;
  승인일시: string;
}

const InvestmentTypeManagement = () => {
  const columns: TableColumnsType<DataType> = [
    {
      title: "NO",
      dataIndex: "NO",
    },
    {
      title: "기존유형",
      dataIndex: "기존유형",
    },
    {
      title: "신청유형",
      dataIndex: "신청유형",
    },
    {
      title: "제출서류",
      dataIndex: "제출서류",
      render: (value) => <Button disabled>{value}</Button>
    },
    {
      title: "신청일시",
      dataIndex: "신청일시",
    },
    {
      title: "승인여부",
      dataIndex: "승인여부",
      render: (value) => <ApprovalStatus status={value} />,
    },
    {
      title: "승인거부사유",
      dataIndex: "승인거부사유",
    },

    {
      title: "승인일시",
      dataIndex: "승인일시",
    },
  ];

  const data: DataType[] = [
    {
      NO: 1,
      기존유형: "소득적격",
      신청유형: "개인전문",
      제출서류: "보기",
      신청일시: "2023-01-10 09:00:00",
      승인여부: "승인완료",
      승인거부사유:
        "서류 식별 불가 금융투자업자에 계좌를 개설한지 1년 미만으로 전문투자자 승인 불가",
      승인일시: "2023-01-10 09:00:00",
    },
    {
      NO: 2,
      기존유형: "소득적격",
      신청유형: "개인전문",
      제출서류: "보기",
      신청일시: "2023-01-10 09:00:00",
      승인여부: "승인대기",
      승인거부사유:
        "서류 식별 불가 금융투자업자에 계좌를 개설한지 1년 미만으로 전문투자자 승인 불가",
      승인일시: "2023-01-10 09:00:00",
    },
    {
      NO: 3,
      기존유형: "소득적격",
      신청유형: "개인전문",
      제출서류: "보기",
      신청일시: "2023-01-10 09:00:00",
      승인여부: "승인거절",
      승인거부사유:
        "서류 식별 불가 금융투자업자에 계좌를 개설한지 1년 미만으로 전문투자자 승인 불가",
      승인일시: "2023-01-10 09:00:00",
    },
    {
      NO: 4,
      기존유형: "소득적격",
      신청유형: "개인전문",
      제출서류: "보기",
      신청일시: "2023-01-10 09:00:00",
      승인여부: "승인대기",
      승인거부사유:
        "서류 식별 불가 금융투자업자에 계좌를 개설한지 1년 미만으로 전문투자자 승인 불가",
      승인일시: "2023-01-10 09:00:00",
    },
    {
      NO: 5,
      기존유형: "소득적격",
      신청유형: "개인전문",
      제출서류: "보기",
      신청일시: "2023-01-10 09:00:00",
      승인여부: "승인대기",
      승인거부사유:
        "서류 식별 불가 금융투자업자에 계좌를 개설한지 1년 미만으로 전문투자자 승인 불가",
      승인일시: "2023-01-10 09:00:00",
    },
    {
      NO: 6,
      기존유형: "소득적격",
      신청유형: "개인전문",
      제출서류: "보기",
      신청일시: "2023-01-10 09:00:00",
      승인여부: "승인대기",
      승인거부사유:
        "서류 식별 불가 금융투자업자에 계좌를 개설한지 1년 미만으로 전문투자자 승인 불가",
      승인일시: "2023-01-10 09:00:00",
    },
    {
      NO: 7,
      기존유형: "소득적격",
      신청유형: "개인전문",
      제출서류: "보기",
      신청일시: "2023-01-10 09:00:00",
      승인여부: "승인대기",
      승인거부사유:
        "서류 식별 불가 금융투자업자에 계좌를 개설한지 1년 미만으로 전문투자자 승인 불가",
      승인일시: "2023-01-10 09:00:00",
    },
    {
      NO: 8,
      기존유형: "소득적격",
      신청유형: "개인전문",
      제출서류: "보기",
      신청일시: "2023-01-10 09:00:00",
      승인여부: "승인대기",
      승인거부사유:
        "서류 식별 불가 금융투자업자에 계좌를 개설한지 1년 미만으로 전문투자자 승인 불가",
      승인일시: "2023-01-10 09:00:00",
    },
    {
      NO: 9,
      기존유형: "소득적격",
      신청유형: "개인전문",
      제출서류: "보기",
      신청일시: "2023-01-10 09:00:00",
      승인여부: "승인대기",
      승인거부사유:
        "서류 식별 불가 금융투자업자에 계좌를 개설한지 1년 미만으로 전문투자자 승인 불가",
      승인일시: "2023-01-10 09:00:00",
    },
    {
      NO: 10,
      기존유형: "소득적격",
      신청유형: "개인전문",
      제출서류: "보기",
      신청일시: "2023-01-10 09:00:00",
      승인여부: "승인대기",
      승인거부사유:
        "서류 식별 불가 금융투자업자에 계좌를 개설한지 1년 미만으로 전문투자자 승인 불가",
      승인일시: "2023-01-10 09:00:00",
    },
    {
      NO: 11,
      기존유형: "소득적격",
      신청유형: "개인전문",
      제출서류: "보기",
      신청일시: "2023-01-10 09:00:00",
      승인여부: "승인대기",
      승인거부사유:
        "서류 식별 불가 금융투자업자에 계좌를 개설한지 1년 미만으로 전문투자자 승인 불가",
      승인일시: "2023-01-10 09:00:00",
    },
    {
      NO: 12,
      기존유형: "소득적격",
      신청유형: "개인전문",
      제출서류: "보기",
      신청일시: "2023-01-10 09:00:00",
      승인여부: "승인대기",
      승인거부사유:
        "서류 식별 불가 금융투자업자에 계좌를 개설한지 1년 미만으로 전문투자자 승인 불가",
      승인일시: "2023-01-10 09:00:00",
    },
    {
      NO: 13,
      기존유형: "소득적격",
      신청유형: "개인전문",
      제출서류: "보기",
      신청일시: "2023-01-10 09:00:00",
      승인여부: "승인대기",
      승인거부사유:
        "서류 식별 불가 금융투자업자에 계좌를 개설한지 1년 미만으로 전문투자자 승인 불가",
      승인일시: "2023-01-10 09:00:00",
    },
    {
      NO: 14,
      기존유형: "소득적격",
      신청유형: "개인전문",
      제출서류: "보기",
      신청일시: "2023-01-10 09:00:00",
      승인여부: "승인대기",
      승인거부사유:
        "서류 식별 불가 금융투자업자에 계좌를 개설한지 1년 미만으로 전문투자자 승인 불가",
      승인일시: "2023-01-10 09:00:00",
    },
    {
      NO: 15,
      기존유형: "소득적격",
      신청유형: "개인전문",
      제출서류: "보기",
      신청일시: "2023-01-10 09:00:00",
      승인여부: "승인대기",
      승인거부사유:
        "서류 식별 불가 금융투자업자에 계좌를 개설한지 1년 미만으로 전문투자자 승인 불가",
      승인일시: "2023-01-10 09:00:00",
    },
    {
      NO: 16,
      기존유형: "소득적격",
      신청유형: "개인전문",
      제출서류: "보기",
      신청일시: "2023-01-10 09:00:00",
      승인여부: "승인대기",
      승인거부사유:
        "서류 식별 불가 금융투자업자에 계좌를 개설한지 1년 미만으로 전문투자자 승인 불가",
      승인일시: "2023-01-10 09:00:00",
    },
    {
      NO: 17,
      기존유형: "소득적격",
      신청유형: "개인전문",
      제출서류: "보기",
      신청일시: "2023-01-10 09:00:00",
      승인여부: "승인대기",
      승인거부사유:
        "서류 식별 불가 금융투자업자에 계좌를 개설한지 1년 미만으로 전문투자자 승인 불가",
      승인일시: "2023-01-10 09:00:00",
    },
    {
      NO: 18,
      기존유형: "소득적격",
      신청유형: "개인전문",
      제출서류: "보기",
      신청일시: "2023-01-10 09:00:00",
      승인여부: "승인대기",
      승인거부사유:
        "서류 식별 불가 금융투자업자에 계좌를 개설한지 1년 미만으로 전문투자자 승인 불가",
      승인일시: "2023-01-10 09:00:00",
    },
    {
      NO: 19,
      기존유형: "소득적격",
      신청유형: "개인전문",
      제출서류: "보기",
      신청일시: "2023-01-10 09:00:00",
      승인여부: "승인대기",
      승인거부사유:
        "서류 식별 불가 금융투자업자에 계좌를 개설한지 1년 미만으로 전문투자자 승인 불가",
      승인일시: "2023-01-10 09:00:00",
    },
    {
      NO: 20,
      기존유형: "소득적격",
      신청유형: "개인전문",
      제출서류: "보기",
      신청일시: "2023-01-10 09:00:00",
      승인여부: "승인대기",
      승인거부사유:
        "서류 식별 불가 금융투자업자에 계좌를 개설한지 1년 미만으로 전문투자자 승인 불가",
      승인일시: "2023-01-10 09:00:00",
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
    <div style={{ marginLeft: "2rem", marginRight: "2rem", marginTop: "2rem" }}>
      <div style={{ marginTop: "30px" }}>
        <Flex
          justify="space-between"
          align="center"
          style={{ marginBottom: "12px" }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <span style={{ fontSize: "20px", fontWeight: "600" }}>
              신청 목록
            </span>
            <span
              style={{
                fontSize: "12px",
                fontWeight: "500",
                marginTop: "0.5rem",
              }}
            >
              (총 100명 | 승인대기 <span style={{ color: "red" }}>10</span>명)
            </span>
          </div>
          <div style={{ display: "flex", gap: "10px" }}>
            <Select
              defaultValue="승인여부 전체"
              style={{ width: 120 }}
              options={[
                { value: "승인여부 전체", label: "승인여부 전체" },
                { value: "승인대기", label: "승인대기" },
                { value: "승인완료", label: "승인완료" },
                { value: "승인거부", label: "승인거부" },
              ]}
              size="large"
              dropdownStyle={{ padding: 0 }}
            />
            <Select
              style={{ width: 120 }}
              defaultValue="신청일시순"
              options={[
                { value: "신청일시순", label: "신청일시순" },
                { value: "승인일시순", label: "승인일시순" },
              ]}
              size="large"
              dropdownStyle={{ padding: 0 }}
            />
            <Select
              style={{ width: 120 }}
              defaultValue="50개씩 보기"
              options={[
                { value: "50개씩 보기", label: "50개씩 보기" },
                { value: "100개씩 보기", label: "100개씩 보기" },
                { value: "200개씩 보기", label: "200개씩 보기" },
              ]}
              size="large"
              dropdownStyle={{ padding: 0 }}
            />
          </div>
        </Flex>
        <div style={{ height: "1px", background: "#EEF0F4", marginBottom: '10px' }}></div>
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
              <span>선택한 0건</span>
              <Select
                style={{ width: 120 }}
                defaultValue="승인완료"
                options={[{ value: "승인완료", label: "승인완료" },
                  { value: "승인거부", label: "승인거부" }
                ]}
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
            scroll={{ x: 1300 }}
            rowClassName='tableRow'
          />
        </div>
      </div>
    </div>
  );
};

export default InvestmentTypeManagement;
