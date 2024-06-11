import { Button, Checkbox, Col, Flex, Input, Modal, Row } from "antd";
import "./InformationManagement.css";
import { useState } from "react";
import { RiErrorWarningFill } from "react-icons/ri";
import { IoCheckmarkCircleSharp } from "react-icons/io5";
const InformationManagement = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSuccessOpen, setIsSuccessOpen] = useState(false);
  const [isSubmitModalOpen, setIsSubmitModalOpen] = useState(false);
  const [isSubmitSuccessOpen, setIsSubmitSuccessOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };
  const onSubmitButton = () => {
    setIsSubmitModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
    setIsSuccessOpen(true);
  };

  const handleSubmitOk = () => {
    setIsSubmitModalOpen(false);
    setIsSubmitSuccessOpen(true);
  };

  const handleSuccessOk = () => {
    setIsSuccessOpen(false);
  };
  const handleSubmitSuccessOk = () => {
    setIsSubmitSuccessOpen(false);
  };

  const handleSuccessCancel = () => {
    setIsSuccessOpen(false);
  };
  const handleSubmitSuccessCancel = () => {
    setIsSubmitSuccessOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleSubmitCancel = () => {
    setIsSubmitModalOpen(false);
  };

  return (
    <div>
      <Flex
        justify="space-between"
        align="center"
        style={{ marginBottom: "10px" }}
      >
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
      <div className="container">
        <Row>
          <Col span={4} className="col-1">
            <span>회원번호</span>
          </Col>

          <Col className="col-2">ABC123</Col>
        </Row>

        <Row>
          <Col span={2} className="col-4">
            <span>투자회원</span>
          </Col>

          <Col span={2} style={{ height: "100px", background: "#EEF0F4" }}>
            <Row>
              <Col className="col-5">
                <span>유형</span>
              </Col>
            </Row>
            <Row style={{ borderTop: "1px solid #fff" }}>
              <Col className="col-5">
                <span>GUID</span>
              </Col>
            </Row>
          </Col>
          <Col span={20}>
            <Row
              style={{
                borderBottom: "1px solid #EEF0F4",
              }}
            >
              <Col className="col-2">
                <span>일반개인</span>
              </Col>
            </Row>
            <Row
              style={{
                borderBottom: "1px solid #EEF0F4",
              }}
            >
              <Col className="col-2">
                <span>qwerasdf1324</span>
              </Col>
            </Row>
          </Col>
        </Row>

        <Row>
          <Col span={2} className="col-4">
            <span>대출회원</span>
          </Col>

          <Col
            span={2}
            style={{
              height: "100px",
              background: "#EEF0F4",
              borderTop: "1px solid #fff",
            }}
          >
            <Row>
              <Col className="col-5">
                <span>유형</span>
              </Col>
            </Row>
            <Row
              style={{
                borderTop: "1px solid #fff",
                borderBottom: "1px solid #fff",
              }}
            >
              <Col className="col-5">
                <span>GUID</span>
              </Col>
            </Row>
          </Col>
          <Col span={20}>
            <Row
              style={{
                borderBottom: "1px solid #EEF0F4",
              }}
            >
              <Col className="col-2">
                <span>개인</span>
              </Col>
            </Row>
            <Row
              style={{
                borderBottom: "1px solid #EEF0F4",
              }}
            >
              <Col className="col-2">
                <span>zxcasdqwe1234</span>
              </Col>
            </Row>
          </Col>
        </Row>

        <Row>
          <Col span={4} className="col-1">
            <span>유형</span>
          </Col>
          <Col className="col-2">
            <Flex align="center" gap={10}>
              <span>승인거부</span>
              <Button size="large" type="primary" className="btn-sec">
                사유 확인
              </Button>
            </Flex>
          </Col>
        </Row>

        <Row>
          <Col span={4} className="col-1">
            <span>휴면상태</span>
          </Col>
          <Col className="col-2">
            <Flex align="center" gap={10}>
              <span>휴면 (2023-01-01 09:00:00)</span>
              <Button
                size="large"
                type="primary"
                className="btn-sec"
                onClick={openModal}
              >
                휴면 해제
              </Button>
              <Modal
                title={<RiErrorWarningFill color="#AF7327" />}
                open={isModalOpen}
                onOk={handleOk}
                onCancel={handleCancel}
                footer={[
                  <Flex key="1012" gap={10}>
                    <Button
                      key="submit"
                      type="primary"
                      onClick={handleOk}
                      block
                      style={{ height: "40px" }}
                    >
                      확인
                    </Button>
                    <Button
                      key="back"
                      onClick={handleCancel}
                      block
                      style={{ height: "40px" }}
                    >
                      취소
                    </Button>
                  </Flex>,
                ]}
                width={400}
              >
                <div style={{ marginBottom: "32px", marginTop: "16px" }}>
                  <p style={{ fontSize: "16px", fontWeight: 600 }}>휴면 상태</p>
                  <p style={{ fontSize: "16px" }}>잠금을 해제하시겠습니까?</p>
                </div>
              </Modal>

              <Modal
                title={<IoCheckmarkCircleSharp color="#2A9061" />}
                open={isSuccessOpen}
                onOk={handleSuccessOk}
                onCancel={handleSuccessCancel}
                footer={[
                  <Flex key="test">
                    <Button
                      key="submit"
                      type="primary"
                      onClick={handleSuccessOk}
                      block
                      style={{ height: "40px", width: "40%" }}
                    >
                      확인
                    </Button>
                  </Flex>,
                ]}
                width={400}
              >
                <div style={{ marginBottom: "32px", marginTop: "16px" }}>
                  <p style={{ fontSize: "16px", fontWeight: 600 }}>저장됨</p>
                </div>
              </Modal>
            </Flex>
          </Col>
        </Row>

        <Row>
          <Col span={4} className="col-1">
            <span>블랙리스트여부</span>
          </Col>
          <Col className="col-2">
            <Flex align="center" gap={10}>
              <span>블랙리스트</span>
              <Button size="large" type="primary" className="btn-sec">
                사유 확인
              </Button>
              <Button size="large" type="primary" className="btn-sec">
                블랙리스트 해제
              </Button>
            </Flex>
          </Col>
        </Row>

        <Row>
          <Col span={4} className="col-1">
            <span>회원명</span>
          </Col>
          <Col className="col-2">
            <Flex align="center" gap={10}>
              <span>김길동</span>
              <Button size="large" type="primary" className="btn-sec">
                변경 이력 확인
              </Button>
            </Flex>
          </Col>
        </Row>

        <Row>
          <Col span={4} className="col-1">
            <span>생년월일</span>
          </Col>
          <Col className="col-2">
            <span>1988-01-02</span>
          </Col>
        </Row>

        <Row>
          <Col span={4} className="col-1">
            <span>성별</span>
          </Col>
          <Col className="col-2">
            <span>남자</span>
          </Col>
        </Row>

        <Row>
          <Col span={4} className="col-1">
            <span>이메일 ID</span>
          </Col>
          <Col className="col-2">
            <span>gildongkim@naver.com</span>
          </Col>
        </Row>

        <Row>
          <Col span={4} className="col-1">
            <span>휴대폰 번호</span>
          </Col>
          <Col className="col-2">
            <span>010-1234-5678</span>
          </Col>
        </Row>

        <Row>
          <Col span={4} className="col-1">
            <span>전화번호</span>
          </Col>
          <Col className="col-2">
            <Input value="02-1234-5678"></Input>
          </Col>
        </Row>

        <Row>
          <Col span={4} className="col-1">
            <span>주소</span>
          </Col>
          <Col span={20} className="col-2">
            <Flex
              align="center"
              gap={10}
              justify="space-between"
              style={{ width: "100%" }}
            >
              <Button size="large" type="primary" className="btn-sec">
                주소검색
              </Button>
              <Input
                value="(01234) 서울특별시 강동구 천호대로 12길"
                disabled
              ></Input>
              <Input value="상세주소"></Input>
            </Flex>
          </Col>
        </Row>

        <Row>
          <Col span={4} className="col-1">
            <span>직업</span>
          </Col>
          <Col className="col-2">
            <span>직장인</span>
          </Col>
        </Row>

        <Row>
          <Col span={4} className="col-1">
            <span>출금계좌</span>
          </Col>
          <Col className="col-2">
            <span>신한은행 123-45-678-90</span>
          </Col>
        </Row>

        <Row>
          <Col span={4} className="col-1">
            <span>예치금계좌</span>
          </Col>
          <Col className="col-2">
            <span>전북은행 012-33-22221</span>
          </Col>
        </Row>

        <Row>
          <Col span={4} className="col-1">
            <span>상환전용계좌</span>
          </Col>
          <Col className="col-2">
            <Button size="large" type="primary" className="btn-sec">
              자세히 보기
            </Button>
          </Col>
        </Row>

        <Row>
          <Col span={4} className="col-1">
            <span>마케팅수신동의</span>
          </Col>
          <Col className="col-2">
            <Flex align="center">
              <Checkbox>이메일</Checkbox>
              <Checkbox>문자</Checkbox>
              <Button size="large" type="primary" className="btn-sec">
                동의 이력 확인
              </Button>
            </Flex>
          </Col>
        </Row>

        <Row>
          <Col span={4} className="col-1">
            <span>약관동의</span>
          </Col>
          <Col className="col-2">
            <Flex gap={10} align="center">
              <span>전체 약관동의 완료</span>
              <Button size="large" type="primary" className="btn-sec">
                동의 이력 확인
              </Button>
            </Flex>
          </Col>
        </Row>

        <Row>
          <Col span={4} className="col-1">
            <span>가입일시</span>
          </Col>
          <Col className="col-2">
            <span>2022-01-01 09:00:00</span>
          </Col>
        </Row>

        <Row>
          <Col span={4} className="col-1">
            <span>메모</span>
          </Col>
          <Col span={20} className="col-2">
            <Input.TextArea
              rows={4}
              value="악성민원으로 전화상담 시 주의 필요
                    1금융 대출 1건/연체없음
                    이내 소유 아파트로 대출 문의
                    1순위 하나은행 10억 대출 중
                    대출금리 15%로 협의중"
              style={{ height: "50px" }}
            />
          </Col>
        </Row>
      </div>
      <Memo />
      <History />
      <div
        style={{
          height: "1px",
          background: "#EEF0F4",
          marginTop: "20px",
          marginBottom: "24px",
        }}
      ></div>

      <Flex justify="flex-end" gap={8}>
        <Button
          size="large"
          type="primary"
          style={{ width: "160px", height: "53px" }}
          onClick={onSubmitButton}
        >
          저장
        </Button>
        <Modal
          title={<RiErrorWarningFill color="#AF7327" />}
          open={isSubmitModalOpen}
          onOk={handleSubmitOk}
          onCancel={handleSubmitCancel}
          footer={[
            <Flex key="1012" gap={10}>
              <Button
                key="submit"
                type="primary"
                onClick={handleSubmitOk}
                block
                style={{ height: "40px" }}
              >
                확인
              </Button>
              <Button
                key="back"
                onClick={handleSubmitCancel}
                block
                style={{ height: "40px" }}
              >
                취소
              </Button>
            </Flex>,
          ]}
          width={400}
        >
          <div style={{ marginBottom: "32px", marginTop: "16px" }}>
            <p style={{ fontSize: "16px", fontWeight: 600 }}>
              휴면상태를 해제하시겠습니까?
            </p>
          </div>
        </Modal>

        <Modal
          title={<IoCheckmarkCircleSharp color="#2A9061" />}
          open={isSubmitSuccessOpen}
          onOk={handleSubmitSuccessOk}
          onCancel={handleSubmitSuccessCancel}
          footer={[
            <Flex key="test">
              <Button
                key="submit"
                type="primary"
                onClick={handleSubmitSuccessOk}
                block
                style={{ height: "40px", width: "40%" }}
              >
                확인
              </Button>
            </Flex>,
          ]}
          width={400}
        >
          <div style={{ marginBottom: "32px", marginTop: "16px" }}>
            <p style={{ fontSize: "16px", fontWeight: 600 }}>저장되었습니다.</p>
          </div>
        </Modal>
        <Button size="large" style={{ width: "160px", height: "53px" }}>
          취소
        </Button>
      </Flex>
    </div>
  );
};

const Memo = () => {
  return (
    <div style={{ marginTop: "50px" }}>
      <h5>메모</h5>
      <div className="container">
        <Row>
          <Col span={4} className="col-1">
            <span>법인명</span>
          </Col>
          <Col className="col-2">
            <span>㈜가나다법인</span>
          </Col>
        </Row>
        <Row>
          <Col span={4} className="col-1">
            <span>사업자등록번호</span>
          </Col>
          <Col className="col-2">
            <span>ABC1111-222-333323</span>
          </Col>
        </Row>
        <Row>
          <Col span={4} className="col-1">
            <span>사업자전화번호</span>
          </Col>
          <Col className="col-2">
            <Input value="111-222-3333" />
          </Col>
        </Row>
        <Row>
          <Col span={4} className="col-1">
            <span>사업자주소</span>
          </Col>
          <Col className="col-2">
            <Flex gap={10} align="center">
              <Button size="large" type="primary" className="btn-sec">
                주소검색
              </Button>
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
    <div style={{ marginTop: "50px" }}>
      <h5>저장이력</h5>
      <div className="container">
        <Row>
          <Col span={4} className="col-1">
            <span>최근저장일시</span>
          </Col>
          <Col className="col-2">
            <span>2022-01-01 09:00:00</span>
          </Col>
        </Row>
        <Row>
          <Col span={4} className="col-1">
            <span>관리자</span>
          </Col>
          <Col className="col-2">
            <span>김관리자</span>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default InformationManagement;
