import { Button, Col, Flex, Row, Select, Table, TableColumnsType } from "antd";
import "./CheckDetails.css";

const CheckDetails = () => {
  return (
    <div>
      <h5>계좌정보</h5>
      <div style={{ border: "1px solid #d7d8da", marginBottom: "47px" }}>
        <Row>
          <Col span={4} className="rowStyle">
            <span>출금계좌</span>
          </Col>
          <Col span={20} className="colStyle">
            <span>신한은행 123-45-678-90</span>
          </Col>
        </Row>
        <Row>
          <Col span={4} className="rowStyle">
            <span>예치금계좌</span>
          </Col>
          <Col span={20} className="colStyle">
            <span>전북은행 012-33-22221</span>
          </Col>
        </Row>
        <Row>
          <Col span={4} className="rowStyle">
            <span>투자자잔액</span>
          </Col>
          <Col span={20} className="colStyle">
            <span>10,000,000원</span>
          </Col>
        </Row>
        <Row>
          <Col span={4} className="rowStyle">
            <span>차입자잔액</span>
          </Col>
          <Col span={20} className="colStyle">
            <span>10,000,000원</span>
          </Col>
        </Row>
        <Row>
          <Col span={4} className="rowStyle">
            <span>상환전용계좌</span>
          </Col>
          <Col span={20} className="colStyle">
            <Button size="large" type="primary" className="btnStyle btn-sec">
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
      <Flex justify="space-between" style={{ marginBottom: "12px" }}>
        <Flex gap={10}>
          <h5>입출금 목록</h5>
          <span style={{ marginTop: "0.5em" }}>(총 100건)</span>
        </Flex>
        <Flex gap={8}>
          <Select
            options={[{ value: "2023", label: "2023" }]}
            size="large"
            value="2024"
            dropdownStyle={{ padding: 0 }}
          />
          <Select
            options={[
              { value: "입출금 전체", label: "입출금 전체" },
              { value: "입금", label: "입금" },
              { value: "출금", label: "출금" },
            ]}
            size="large"
            value="입출금 전체"
            dropdownStyle={{ padding: 0 }}
          />
          <Select
            options={[
              { value: "거래일시순", label: "거래일시순" },
              { value: "입금액높은순", label: "입금액높은순" },
              { value: "입금액낮은순", label: "입금액낮은순" },
              { value: "출금액높은순", label: "출금액높은순" },
              { value: "출금액낮은순", label: "출금액낮은순" },
            ]}
            size="large"
            value="거래일시순"
            dropdownStyle={{ padding: 0 }}
          />
          <Select
            defaultValue="50개씩 보기"
            options={[
              { value: "50개씩 보기", label: "50개씩 보기" },
              { value: "100개씩 보기", label: "100개씩 보기" },
              { value: "200개씩 보기", label: "200개씩 보기" },
            ]}
            size="large"
            dropdownStyle={{ padding: 0 }}
          />
          <Button size="large" style={{ background: "#EBEEF3" }}>
            엑셀 다운로드
          </Button>
        </Flex>
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
        pagination={{ position: ["bottomCenter"] }}
        bordered
        rowClassName="tableRow"
      />
    </div>
  );
};
export default CheckDetails;
