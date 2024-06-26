
const ApprovalStatus = ({ status }: { status: string }) => {
  const color: { [key: string]: string } = {
    승인완료: "#dcfce7",
    승인대기: "#ffedd5",
    승인거절: "#fee2e2",
    답변대기: "#FFEDD5",
    답변완료: "#DCFCE7"
  };
  return (
    <div
      style={{
        backgroundColor: color[status],
        paddingInline: "10px",
        borderRadius: "20px",
        display: "inline-block",
      }}
    >
      {status}
    </div>
  );
};

export default ApprovalStatus;
