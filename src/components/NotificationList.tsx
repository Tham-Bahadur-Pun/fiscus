import { Button, Flex, List } from "antd";
import { useEffect, useRef, useState } from "react";
import { TfiBell } from "react-icons/tfi";

const NotificationList = () => {
  const listRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const data = [
    "You have a new transaction!",
    "Transaction has been successfully deposited!",
    "Payment cancelled!",
    "Fiscus mentioned you!",
    "You got new capital advance!",
  ];

  const clickOutside = (event: any) => {
    if (listRef.current && !listRef.current.contains(event.target)) {
      setIsVisible(false)
    }
  };

  useEffect(() => {
    if (isVisible) {
      document.addEventListener("click", clickOutside, true);
    } else {
      document.removeEventListener("click", clickOutside, true);
    }
    return () => {
      document.removeEventListener("click", clickOutside, true);
    };
  }, [isVisible]);

  const handleNotificaitionList = () => {
    console.log(isVisible, "fff");
    isVisible ? setIsVisible(false) : setIsVisible(true);
  };
  return (
    <div ref={listRef}>
      <Button
        icon={<TfiBell color="#babebd" size={20} />}
        onClick={handleNotificaitionList}
        size="large"
      />
      {isVisible && (
        <div style={{ position: "absolute", top: "80px",  }}>
          <List
            style={{
              padding: "10px",
              backgroundColor: "#fff",
              border: "none",
              boxShadow:
                "0 6px 16px 0 rgba(0, 0, 0, 0.08), 0 3px 6px -4px rgba(0, 0, 0, 0.12), 0 9px 28px 8px rgba(0, 0, 0, 0.05)",
            }}
            bordered
            dataSource={data}
            renderItem={(item) => (
              <List.Item>
                <Flex gap={10} align="center">
                  <Button
                    style={{
                      paddingBlock: "0px",
                      height: "100%",
                      fontSize: "1rem",
                    }}
                  >
                    Check
                  </Button>
                  <span
                    style={{ textDecoration: "underline", fontSize: "1rem" }}
                  >
                    {item}
                  </span>
                </Flex>
              </List.Item>
            )}
          />
        </div>
      )}
    </div>
  );
};

export default NotificationList;
