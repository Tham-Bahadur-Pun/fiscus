import { Button, Col, Flex, Row, Select, Table, TableColumnsType } from "antd";

const CheckDetails = () => {
  return (
    <div>
      <h5>계좌정보</h5>
      <div style={{ border: "1px solid #d7d8da" }}>
        <Row>
          <Col
            span={4}
            style={{
              backgroundColor: "#EEF0F4",
              padding: "12px",
              borderBottomColor: "#fff",
            }}
          >
            <span>출금계좌</span>
          </Col>
          <Col style={{ padding: "12px", borderColor: "#eef0f4" }}>
            <span>신한은행 123-45-678-90</span>
          </Col>
        </Row>
        <Row>
          <Col
            span={4}
            style={{
              backgroundColor: "#EEF0F4",
              padding: "12px",
              borderBottomColor: "#fff",
            }}
          >
            <span>예치금계좌</span>
          </Col>
          <Col style={{ padding: "12px", borderColor: "#eef0f4" }}>
            <span>전북은행 012-33-22221</span>
          </Col>
        </Row>
        <Row>
          <Col
            span={4}
            style={{
              backgroundColor: "#EEF0F4",
              padding: "12px",
              borderBottomColor: "#fff",
            }}
          >
            <span>투자자잔액</span>
          </Col>
          <Col style={{ padding: "12px", borderColor: "#eef0f4" }}>
            <span>10,000,000원</span>
          </Col>
        </Row>
        <Row>
          <Col
            span={4}
            style={{
              backgroundColor: "#EEF0F4",
              padding: "12px",
              borderBottomColor: "#fff",
            }}
          >
            <span>차입자잔액</span>
          </Col>
          <Col style={{ padding: "12px", borderColor: "#eef0f4" }}>
            <span>10,000,000원</span>
          </Col>
        </Row>
        <Row>
          <Col span={4} style={{ backgroundColor: "#EEF0F4", padding: "12px" }}>
            <span>상환전용계좌</span>
          </Col>
          <Col style={{ padding: "12px" }}>
            <Button size="large" type="primary">
              자세히 보기
            </Button>
          </Col>
        </Row>
      </div>
      <DepositWithdrawList />
    </div>
  );
};

const DepositWithdrawList = () => {
  const columns: TableColumnsType<any> = [
    {
      title: "NO",
      dataIndex: "no",
      key: "no",
    },
    {
      title: "거래구분",
      children: [
        {
          title: "입출금",
          dataIndex: "입출금",
          key: "입출금",
        },
        {
          title: "유형",
          dataIndex: "유형",
          key: "유형",
        },
      ],
    },
    {
      title: "채권 ID",
      dataIndex: "채권 ID",
      key: "채권 ID",
    },
    {
      title: "펀딩 ID",
      dataIndex: "펀딩 ID",
      key: "펀딩 ID",
    },
    {
      title: "펀딩상품명",
      dataIndex: "펀딩상품명",
      key: "펀딩상품명",
    },
    {
      title: "입금액",
      dataIndex: "입금액",
      key: "입금액",
    },
    {
      title: "출금액",
      dataIndex: "출금액",
      key: "출금액",
    },
    {
      title: "거래 후 잔액",
      dataIndex: "출금액",
      key: "출금액",
      children: [
        { title: "투자자잔액", dataIndex: "투자자잔액", key: "투자자잔액" },
        { title: "차입자잔액", dataIndex: "차입자잔액", key: "차입자잔액" },
      ],
    },
    { title: "거래일시", dataIndex: "거래일시", key: "거래일시" },
  ];

  return (
    <div>
      <Flex justify="space-between">
        <div>
          <h5>입출금 목록</h5>
          <span>(총 100건)</span>
        </div>
        <div>
          <Select
            options={[{ value: "2023", label: "2023" }]}
            size="large"
            value="2024"
            dropdownStyle={{ padding: 0 }}
          />
          <Select
            options={[{ value: "2023", label: "2023" }]}
            size="large"
            value="2024"
            dropdownStyle={{ padding: 0 }}
          />
          <Select
            options={[{ value: "2023", label: "2023" }]}
            size="large"
            value="2024"
            dropdownStyle={{ padding: 0 }}
          />
          <Select
            options={[{ value: "2023", label: "2023" }]}
            size="large"
            value="2024"
            dropdownStyle={{ padding: 0 }}
          />
          <Button size="large">엑셀 다운로드</Button>
        </div>
      </Flex>
      <Table
        columns={columns}
        footer={() => (
          <ul>
            <li>
              <span>
                유형이 ‘대출이자상환, 대출원금상환, 미청구금’인 경우, 거래 후
                잔액에 포함되지 않습니다.
              </span>
            </li>
          </ul>
        )}
      />
    </div>
  );
};
export default CheckDetails;
