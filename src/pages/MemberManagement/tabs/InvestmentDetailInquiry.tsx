import { Button, Col, Flex, Row, Select, Table, TableColumnsType } from "antd";

const InvestmentDetailInquiry = () => {
  return (
    <div>
      <Flex gap={8} style={{ marginBottom: "16px" }}>
        <h5>투자한도</h5>
        <span
          style={{
            borderRadius: "100px",
            paddingInline: "10px",
            border: "1px solid blue",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "0.5em",
          }}
        >
          일반개인
        </span>
      </Flex>
      <div style={{ border: "1px solid #d7d8da", marginBottom: "47px" }}>
        <Row>
          <Col
            span={4}
            style={{
              display: "flex",
              paddingLeft: "1em",
              alignItems: "center",
              height: "50px",
              background: "#EEF0F4",
              borderBottom: "1px solid #fff",
            }}
          >
            <span>총 잔여투자한도</span>
          </Col>
          <Col
            span={20}
            style={{
              display: "flex",
              alignItems: "center",
              paddingLeft: "1.4em",
              height: "50px",
              borderBottom: "1px solid #EEF0F4",
            }}
          >
            <span>29,500,000원 / 30,000,000원</span>
          </Col>
        </Row>
        <Row>
          <Col
            span={4}
            style={{
              display: "flex",
              paddingLeft: "1em",
              alignItems: "center",
              height: "50px",
              background: "#EEF0F4",
              borderBottom: "1px solid #fff",
            }}
          >
            <span>부동산 잔여투자한도</span>
          </Col>
          <Col
            span={20}
            style={{
              display: "flex",
              alignItems: "center",
              paddingLeft: "1.4em",
              height: "50px",
              borderBottom: "1px solid #EEF0F4",
            }}
          >
            <span>9,500,000원 / 10,000,000원</span>
          </Col>
        </Row>
      </div>
      <InvestmentStatus />
      <InvestmentList />
    </div>
  );
};

const InvestmentStatus = () => {
  const columns: TableColumnsType<any> = [
    {
      title: "자산",
      children: [
        {
          title: "예치금",
          dataIndex: "예치금",
          key: "예치금",
        },
        {
          title: "현재투자금액",
          dataIndex: "현재투자금액",
          key: "현재투자금액",
        },
      ],
    },
    {
      title: "투자원금",
      children: [
        {
          title: "상환예정원금",
          dataIndex: "상환예정원금",
          key: "상환예정원금",
        },
        {
          title: "상환지연원금",
          dataIndex: "상환지연원금",
          key: "상환지연원금",
        },
        {
          title: "손실원금",
          dataIndex: "손실원금",
          key: "손실원금",
        },
      ],
    },
    {
      title: "투자수익",
      children: [
        { title: "이자수익", dataIndex: "이자수익", key: "이자수익" },
        {
          title: "연체이자수익",
          dataIndex: "연체이자수익",
          key: "연체이자수익",
        },
      ],
    },
  ];
  return (
    <div>
      <h5>투자현황</h5>
      <Table
        columns={columns}
        size="large"
        // dataSource={data}
        pagination={{ position: ["bottomCenter"], pageSize: 50 }}
        rowKey={(data) => data.NO}
        scroll={{ x: 1000 }}
        bordered
        rowClassName='tableRow'
      />
    </div>
  );
};

const InvestmentList = () => {
  const columns: TableColumnsType<any> = [
    {
      title: "NO",
      dataIndex: "NO",
      key: "NO",
    },
    {
      title: "투자 ID",
      dataIndex: "투자 ID",
      key: "투자 ID",
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
      title: "상태",
      dataIndex: "상태",
      key: "상태",
    },
    {
      title: "원리금수취권",
      dataIndex: "원리금수취권",
      key: "원리금수취권",
    },
    {
      title: "투자기간",
      dataIndex: "투자기간",
      key: "투자기간",
    },
    {
      title: "상환방식",
      dataIndex: "상환방식",
      key: "상환방식",
    },
    {
      title: "수익률",
      dataIndex: "수익률",
      key: "수익률",
    },
    {
      title: "투자금액",
      dataIndex: "투자금액",
      key: "투자금액",
    },
    {
      title: "상환금액",
      children: [
        {
          title: "기존상환금액",
          dataIndex: "기존상환금액",
          key: "기존상환금액",
        },
        {
          title: "잔여상환금액",
          dataIndex: "잔여상환금액",
          key: "잔여상환금액",
        },
      ],
    },
    {
      title: "상환회차",
      dataIndex: "상환회차",
      key: "상환회차",
    },
    {
      title: "지급일",
      dataIndex: "지급일",
      key: "지급일",
    },
    {
      title: "연체금액",
      dataIndex: "연체금액",
      key: "연체금액",
    },
    {
      title: "투자일시",
      dataIndex: "투자일시",
      key: "투자일시",
    },
  ];
  return (
    <div>
      <Flex justify="space-between">
        <Flex gap={8}>
          <h5>투자현황</h5>
          <span style={{ marginTop: "0.5em" }}>(총 100건)</span>
        </Flex>
        <Flex gap={8} style={{ marginBottom: "12px" }}>
          <Select
            options={[
              { value: "상태전체", label: "상태전체" },
              { value: "투자신청", label: "투자신청" },
              { value: "투자모집완료", label: "투자모집완료" },
              { value: "투자취소", label: "투자취소" },
              { value: "상환중", label: "상환중" },
              { value: "연체중", label: "연체중" },
              { value: "중도상환완료", label: "중도상환완료" },
            ]}
            size="large"
            value="상태전체"
            dropdownStyle={{ padding: 0 }}
          />
          <Select
            options={[
              { value: "투자일시순", label: "투자일시순" },
              { value: "투자 ID순", label: "투자 ID순" },
              { value: "펀딩상품명순", label: "펀딩상품명순" },
            ]}
            size="large"
            value="투자일시순"
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
          <Button size="large" style={{ background: "#EBEEF3" }}>
            엑셀 다운로드
          </Button>
        </Flex>
      </Flex>
      <Table
        columns={columns}
        bordered
        size="large"
        //  dataSource={data}
        pagination={{ position: ["bottomCenter"], pageSize: 20 }}
        scroll={{ x: 1700 }}
        rowKey={(data) => data.NO}
        rowClassName='tableRow'
      />
    </div>
  );
};

export default InvestmentDetailInquiry;
