import { Flex, Select, Table, TableColumnsType } from "antd";

const InquiryHistory = () => {
    const columns: TableColumnsType<any> = [
        {
          title: "NO",
          dataIndex: "NO",
          key: "NO",
        },
        {
          title: "유형",
          dataIndex: "유형",
          key: "유형",
        },
        {
          title: "문의내용",
          dataIndex: "문의내용",
          key: "문의내용",
        },
        {
          title: "답변여부",
          dataIndex: "답변여부",
          key: "답변여부",
        },
        {
          title: "등록일시",
          dataIndex: "등록일시",
          key: "등록일시",
        },
    ]
  return (
    <div>
      <Flex>
        <div>
            <h5>문의내역 조회</h5>
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
          </div>
      </Flex>
      <Table columns={columns} />

    </div>
  );
};

export default InquiryHistory;
