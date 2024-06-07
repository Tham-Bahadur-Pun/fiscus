import { Button, Checkbox, Col, Flex, Input, Row } from "antd";
import React from "react";

const InformationManagement = () => {
  return (
    <div>
      <Flex justify="space-between" align="center">
        <h5>회원정보</h5>
        <Flex gap={4}>
          <Button size="large" type="primary">
            임시비밀번호 발급
          </Button>
          <Button size="large" type="primary">
            블랙리스트 등록
          </Button>
          <Button size="large" type="primary">
            회원탈퇴
          </Button>
        </Flex>
      </Flex>
      <div style={{ background: "#EEF0F4" }}>
        <Row gutter={[4, 4]}>
          <Col span={2}>
            <span>회원번호</span>
          </Col>

          <Col>ABC123</Col>
        </Row>
        <Row style={{ background: "red" }}>
          <Col
            span={2}
            style={{ textAlign: "center", verticalAlign: "ccente" }}
          >
            <span>투자회원</span>
          </Col>

          <Col span={2}>
            <Row>
              <Col>
                <span>유형</span>
              </Col>
            </Row>
            <Row>
              <Col>
                <span>GUID</span>
              </Col>
            </Row>
          </Col>
          <Col span={2}>
            <Row>
              <Col>
                <span>일반개인</span>
              </Col>
            </Row>
            <Row>
              <Col>
                <span>qwerasdf1324</span>
              </Col>
            </Row>
          </Col>
        </Row>

        <Row style={{ background: "red" }}>
          <Col
            span={2}
            style={{ textAlign: "center", verticalAlign: "ccente" }}
          >
            <span>대출회원</span>
          </Col>

          <Col span={2}>
            <Row>
              <Col>
                <span>유형</span>
              </Col>
            </Row>
            <Row>
              <Col>
                <span>GUID</span>
              </Col>
            </Row>
          </Col>
          <Col span={2}>
            <Row>
              <Col>
                <span>개인</span>
              </Col>
            </Row>
            <Row>
              <Col>
                <span>zxcasdqwe1234</span>
              </Col>
            </Row>
          </Col>
        </Row>

        <Row>
          <Col>
            <span>유형</span>
          </Col>
          <Col>
            <span>승인거부</span>
            <Button size="large">사유 확인 </Button>
          </Col>
        </Row>
        <Row>
          <Col>
            <span>휴면상태</span>
          </Col>
          <Col>
            <span>휴면 (2023-01-01 09:00:00)</span>
            <Button size="large">휴면 해제 </Button>
          </Col>
        </Row>
        <Row>
          <Col>
            <span>블랙리스트여부</span>
          </Col>
          <Col>
            <span>블랙리스트</span>
            <Button size="large">사유 확인 </Button>
            <Button size="large">블랙리스트 해제 </Button>
          </Col>
        </Row>
        <Row>
          <Col>
            <span>회원명</span>
          </Col>
          <Col>
            <span>김길동</span>
            <Button size="large">변경 이력 확인 </Button>
          </Col>
        </Row>
        <Row>
          <Col>
            <span>생년월일</span>
          </Col>
          <Col>
            <span>1988-01-02</span>
          </Col>
        </Row>
        <Row>
          <Col>
            <span>성별</span>
          </Col>
          <Col>
            <span>남자</span>
          </Col>
        </Row>
        <Row>
          <Col>
            <span>이메일 ID</span>
          </Col>
          <Col>
            <span>gildongkim@naver.com</span>
          </Col>
        </Row>
        <Row>
          <Col>
            <span>휴대폰 번호</span>
          </Col>
          <Col>
            <span>010-1234-5678</span>
          </Col>
        </Row>
        <Row>
          <Col>
            <span>전화번호</span>
          </Col>
          <Col>
            <Input value="02-1234-5678"></Input>
          </Col>
        </Row>
        <Row>
          <Col>
            <span>주소</span>
          </Col>
          <Col>
            <div>
              <Button size="large">주소검색</Button>
              <Input
                value="(01234) 서울특별시 강동구 천호대로 12길"
                disabled
              ></Input>
              <Input value="상세주소"></Input>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <span>직업</span>
          </Col>
          <Col>
            <span>직장인</span>
          </Col>
        </Row>
        <Row>
          <Col>
            <span>출금계좌</span>
          </Col>
          <Col>
            <span>신한은행 123-45-678-90</span>
          </Col>
        </Row>
        <Row>
          <Col>
            <span>예치금계좌</span>
          </Col>
          <Col>
            <span>전북은행 012-33-22221</span>
          </Col>
        </Row>
        <Row>
          <Col>
            <span>상환전용계좌</span>
          </Col>
          <Col>
            <Button size="large">자세히 보기</Button>
          </Col>
        </Row>
        <Row>
          <Col>
            <span>마케팅수신동의</span>
          </Col>
          <Col>
            <div>
              <Checkbox>이메일</Checkbox>
              <Checkbox>문자</Checkbox>
              <Button size="large">동의 이력 확인</Button>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <span>약관동의</span>
          </Col>
          <Col>
            <span>전체 약관동의 완료</span>
            <Button size="large">동의 이력 확인</Button>
          </Col>
        </Row>
        <Row>
          <Col>
            <span>가입일시</span>
          </Col>
          <Col>
            <span>2022-01-01 09:00:00</span>
          </Col>
        </Row>
        <Row>
          <Col>
            <span>메모</span>
          </Col>
          <Col>
            <Input.TextArea
              rows={4}
              value="악성민원으로 전화상담 시 주의 필요
                    1금융 대출 1건/연체없음
                    이내 소유 아파트로 대출 문의
                    1순위 하나은행 10억 대출 중
                    대출금리 15%로 협의중"
            />
          </Col>
        </Row>
      </div>
      <Memo />
      <History />
      <Flex>
        <Button size="large" type="primary">저장</Button>
        <Button size="large">취소</Button>
      </Flex>
    </div>
  );
};

const Memo = () => {
  return (
    <div>
      <h5>메모</h5>
      <div>
        <Row>
          <Col>
            <span>법인명</span>
          </Col>
          <Col>
            <span>㈜가나다법인</span>
          </Col>
        </Row>
        <Row>
          <Col>
            <span>사업자등록번호</span>
          </Col>
          <Col>
            <span>ABC1111-222-333323</span>
          </Col>
        </Row>
        <Row>
          <Col>
            <span>사업자전화번호</span>
          </Col>
          <Col>
            <Input value="111-222-3333" />
          </Col>
        </Row>
        <Row>
          <Col>
            <span>사업자주소</span>
          </Col>
          <Col>
            <Flex>
              <Button size="large">주소검색</Button>
              <Input value="서울특별시 강동구 천호대로 12길" disabled />
              <Input value="상세주소" />
            </Flex>
          </Col>
        </Row>
      </div>
    </div>
  );
};

const History = () => {
  return (
    <div>
      <h5>저장이력</h5>
      <div>
        <Row>
          <Col>
            <span>최근저장일시</span>
          </Col>
          <Col>
            <span>2022-01-01 09:00:00</span>
          </Col>
        </Row>
        <Row>
          <Col>
            <span>관리자</span>
          </Col>
          <Col>
            <span>김관리자</span>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default InformationManagement;
