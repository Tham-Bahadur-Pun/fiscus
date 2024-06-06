import { Radio, Tabs, TabsProps } from "antd";
import { RadioChangeEvent } from "antd/lib";
import React, { useState } from "react";

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

  const [selectedTab, setSelectedTab] = useState()
  // const onChange = ()
  const onChange = ({ target: { value } }: RadioChangeEvent) => {
    console.log('radio1 checked', value);
    setSelectedTab(value);
  };

  return (
    <div>
      <h1 style={{ fontSize: "1.5rem", marginBottom: "1em" }}>회원상세</h1>
      {/* <Tabs
        defaultActiveKey="1"
        items={items}
        size="large"
        tabBarStyle={{ background: "#F5F5F5", borderRadius: "10px"}}
      /> */}
      <Radio.Group
        options={tabItems}
        onChange={onChange}
        value={selectedTab}
        optionType="button"
        buttonStyle="solid"
      />
    </div>
  );
};

export default Detail;
