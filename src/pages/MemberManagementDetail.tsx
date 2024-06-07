import { Radio, Tabs, TabsProps } from "antd";
import { RadioChangeEvent } from "antd/lib";
import React, { useState } from "react";
import { useParams } from "react-router";
import InformationManagement from "./tabs/InformationManagement";
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

  const params = useParams()

  const [selectedTab, setSelectedTab] = useState('기본정보 관리')
  // const onChange = ()
  const onChange = ({ target: { value } }: RadioChangeEvent) => {
    console.log('radio1 checked', value);
    // params.
    setSelectedTab(value);
  };

  return (
    <div>
      <h1 style={{ fontSize: "1.5rem", marginBottom: "1em" }}>회원상세</h1>
      <Radio.Group
        options={tabItems}
        onChange={onChange}
        value={selectedTab}
        optionType="button"
        buttonStyle="solid"
      />
      {selectedTab === '기본정보 관리' && <InformationManagement />}
      {selectedTab === '투자유형 관리' && <InvestmentTypeManagement />}
      {/* {selectedTab === '입출금내역 조회' && < />} */}
      
    </div>
  );
};

export default Detail;
