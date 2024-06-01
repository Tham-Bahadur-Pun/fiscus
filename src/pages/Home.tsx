import { DatePicker, Radio, RadioChangeEvent } from "antd";
import { useEffect, useState } from "react";
import ToggleButton from "../components/ToggleButton";

const Home = () => {

    const [value, setValue] = useState('')
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

  const onChange = (e: RadioChangeEvent) => {
    setValue(e.target.value)
  }
  return (
    <div>
      <h1 style={{ fontSize: "1.5rem", marginBottom: "1em" }}>회원 관리</h1>
      <div>
        <ul>
          <li>
            <div style={{ display: "flex", alignItems: "center", gap: "2px" }}>
              <span style={{ marginRight: "2em" }}>가입일</span>
              <ToggleButton items={joinDates} />
              <RangePicker
                size="large"
                style={{ fontWeight: 600, fontSize: "1rem" }}
              />
            </div>
          </li>

          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <li>
              <div
                style={{ display: "flex", alignItems: "center", gap: "2px" }}
              >
                <span style={{ marginRight: "2em" }}>채널</span>
                <Radio.Group onChange={onChange} value={value} size="large">
                  <Radio value={1}>A</Radio>
                  <Radio value={2}>B</Radio>
                  <Radio value={3}>C</Radio>
                  <Radio value={4}>D</Radio>
                </Radio.Group>
              </div>
            </li>
            <li>
              <div
                style={{ display: "flex", alignItems: "center", gap: "2px" }}
              >
                <span style={{ marginRight: "2em" }}> 채널</span>
                <Radio.Group onChange={onChange} value={value} size="large">
                  <Radio value={1}>A</Radio>
                  <Radio value={2}>B</Radio>
                  <Radio value={3}>C</Radio>
                  <Radio value={4}>D</Radio>
                </Radio.Group>
              </div>
            </li>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Home;
