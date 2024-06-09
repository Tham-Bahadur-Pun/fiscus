import { Radio } from "antd";
import { RadioChangeEvent } from "antd/lib";
import { useState } from "react";
import CheckDetails from "./tabs/CheckDetails";
import InformationManagement from "./tabs/InformationManagement";
import InquiryHistory from "./tabs/InquiryHistory";
import InvestmentDetailInquiry from "./tabs/InvestmentDetailInquiry";
import InvestmentTypeManagement from "./tabs/InvestmentTypeManagement";

const Detail = () => {
  const tabItems = [
    {
      label: "기본정보 관리",
      value: "기본정보 관리"
    },
    {
      label: "투자유형 관리",
      value: "투자유형 관리"
    },
    {
      label: "입출금내역 조회",
      value: "입출금내역 조회",
    },
    {
      label: "영업내역 조회",
      value: "영업내역 조회",
    },
    {
      label: "투자내역 조회",
      value: "투자내역 조회"
    },
    {
      label: "채권내역 조회",
      value: "채권내역 조회",
    },
    {
      label: "SMS 관리",
      value: "SMS 관리",
    },
    {
      label: "상담내역 관리",
      value: "상담내역 관리",
    },
    {
      label: "1:1문의내역 조회",
      value: "1:1문의내역 조회",
    },
  ];


  const [selectedTab, setSelectedTab] = useState('기본정보 관리')
  const onChange = ({ target: { value } }: RadioChangeEvent) => {
      setSelectedTab(value);
  };

  return (
    <div>
      <h1 style={{ fontSize: "1.5rem", marginBottom: "0.5em" }}>회원상세</h1>
      <div style={{ height: "1px", background: "#EEF0F4",  marginBottom: "1em"  }}></div>

      <div style={{ marginBottom: '42px', flexGrow: 1}}>
        <Radio.Group
          options={tabItems}
          onChange={onChange}
          value={selectedTab}
          optionType="button"
          buttonStyle="solid"
          size="large"
          style={{flexGrow: 1}}
        />
      </div>
      {selectedTab === '기본정보 관리' && <InformationManagement />}
      {selectedTab === '투자유형 관리' && <InvestmentTypeManagement />}
      {selectedTab === '입출금내역 조회' && <CheckDetails />}
      {selectedTab === '투자내역 조회' && <InvestmentDetailInquiry />}
      {selectedTab === '1:1문의내역 조회' && <InquiryHistory />}      
    </div>
  );
};

export default Detail;
