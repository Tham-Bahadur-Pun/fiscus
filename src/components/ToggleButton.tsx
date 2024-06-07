import React, { useState } from "react";
import "./ToggleButton.css";

const ToggleButton = ({
  items,
}: {
  items: { label: string; value: string }[];
}) => {
  const [selected, setSelected] = useState("");

  return (
    <div style={{ display: "flex", gap: "2px" }}>
      {items.map((item) => (
        <div
          key={item.value}
          className={`container ${
            item.value === selected ? "selectedHover" : ""
          }`}
          style={{
            background: item.value === selected ? "#2A3958" : "#fff",
            color: item.value === selected ? "#fff" : "",
            border:
              item.value === selected
                ? "1px solid #2A3958"
                : "1px solid #d9d9d9",
            display: "inline-block",
            paddingInline: "15px",
            paddingBlock: "10px",
            borderRadius: "10px",
          }}
          onClick={() => setSelected(item.value)}
        >
          <span style={{ fontSize: "1rem" }}>{item.label}</span>
        </div>
      ))}
    </div>
  );
};

export default ToggleButton;
