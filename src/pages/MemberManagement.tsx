import { useEffect } from "react";

const MemberManagement = () => {
  useEffect(() => {
    document.title = "Member Management | Fiscus";
  }, []);
  return <div>MemberManagement</div>;
};

export default MemberManagement;
