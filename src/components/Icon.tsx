import { ReactNode } from "react";

const Icon = ({
  itemKey,
  iconName,
  selectedMenu,
}: {
  itemKey: number;
  selectedMenu: number;
  iconName: ReactNode;
}) => {
  return (
    <div
      style={{
        borderRadius: "10px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minWidth: "30px",
        height: "30px",
        background: selectedMenu === itemKey ? "#2A3958" : "#fff",
        boxShadow:
          selectedMenu !== itemKey
            ? "0 0 0 0 transparent, 0 0 0 0 transparent, 0 2px 4px 0 rgba(40, 60, 61, .04), 0 8px 16px 0 rgba(97, 111, 112, .16)"
            : "none",

        marginRight: "12px",
      }}
    >
      {iconName}
    </div>
  );
};

export default Icon;
