import { Button, List } from 'antd';
import { useEffect, useRef, useState } from 'react';
import { IoSettingsOutline } from 'react-icons/io5';

const SettingList = () => {
    const listRef = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);
    const data = [
      "내 정보",
      "로그아웃",
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
  
    const handleSettingList = () => {
      console.log(isVisible, "fff");
      isVisible ? setIsVisible(false) : setIsVisible(true);
    };
    return (
      <div ref={listRef}>
       <Button
          icon={<IoSettingsOutline color="#babebd" size={20} />}
            onClick={handleSettingList}
          size="large"
        />
        {isVisible && (
          <div style={{ position: "absolute", top: "80px",  }}>
            <List
              style={{
                backgroundColor: "#fff",
                border: "none",
                padding:'2px',
                boxShadow:
                  "0 6px 16px 0 rgba(0, 0, 0, 0.08), 0 3px 6px -4px rgba(0, 0, 0, 0.12), 0 9px 28px 8px rgba(0, 0, 0, 0.05)",
              }}
              bordered
              dataSource={data}
              renderItem={(item) => (
                <List.Item style={{padding: 0, border: 'none'}} className='setting-list'>
                    <span
                      style={{ fontSize: "1rem" }}
                    >
                      {item}
                    </span>
                </List.Item>
              )}
            />
          </div>
        )}
      </div>
    );
}

export default SettingList