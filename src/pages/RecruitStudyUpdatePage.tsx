import React, { useEffect } from "react";
// import { useParams, useNavigate } from "react-router-dom";
import BasicHeader from "../components/common/BasicHeader";
import Footer from "../components/common/Footer";
import RecruitStudyUpdateContainer from "../components/Container/RecruitStudyUpdateContainer"
import { useSetUserInfo } from "../utils/auth";

const RecruitStudyCreatePage: React.FC = () => {
  const { setUserInfo } = useSetUserInfo();
  useEffect(() => {
    setUserInfo();
  }, []);
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <BasicHeader />
      <RecruitStudyUpdateContainer />
      <Footer />
    </div>
  );
};

export default RecruitStudyCreatePage;
