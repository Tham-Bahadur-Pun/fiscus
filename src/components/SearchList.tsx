import { Input, List } from 'antd';
import { useEffect, useRef, useState } from 'react';
import { CiSearch } from 'react-icons/ci';

const SearchList = () => {
    const listRef = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);
    const data = [
      {
        text:'대시보드',
        link: '/dashboard'
      },
      {
        text:'회원 관리',
        link: '/dashboard/member-management'
      },
      {
        text:'영업 관리',
        link: '/dashboard/business-management'
      },
      {
        text:'펀딩 관리',
        link: '/dashboard/funding-management'
      },
      {
        text:'투자 관리',
        link: '/dashboard/investment-management'
      },
      {
        text:'채권 관리',
        link: '/dashboard/bond-management'
      },
      {
        text:'지급 관리',
        link: '/dashboard/payment-management'
      },
      {
        text:'세무 관리',
        link: '/dashboard/tax-management'
      },
      {
        text:'변경내역/로그 조회',
        link: '/dashboard/change-history'
      },
      {
        text:'전시/게시판 관리',
        link: '/dashboard/exhibition-management'
      },

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
  
  
    return (
      <div ref={listRef}>
      <Input
          prefix={<CiSearch size={25} color="#babebd" />}
          size="large"
          placeholder="메뉴 검색"
          style={{ width: "100%" }}
          type="search"
        //   onClick={() => <div>hello</div>}
        onFocus={()=> setIsVisible(true)}
        ></Input>
        {isVisible && (
          <div style={{ position: "absolute", top: "80px", width:"400px", height:'200px'  }}>
            <List
              style={{
                height: '200px',
                overflowY: 'scroll',
                backgroundColor: "#fff",
                padding:'10px',
                boxShadow:
                  "0 6px 16px 0 rgba(0, 0, 0, 0.08), 0 3px 6px -4px rgba(0, 0, 0, 0.12), 0 9px 28px 8px rgba(0, 0, 0, 0.05)",
              }}
              bordered
              dataSource={data}
              renderItem={(item) => (
                <List.Item style={{padding: '10px',}} >
                    <span
                      style={{ fontSize: "1rem" }}
                    >
                      <h4>{item.text}</h4>
                      <div style={{color:'#8C8C8C', fontSize:'14px'}}>{item.link}</div>
                    </span>
                </List.Item>
              )}
            />
          </div>
        )}
      </div>
    );
}

export default SearchList