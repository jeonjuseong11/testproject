// Home.tsx

import React, { useEffect } from "react";
import { getInitialTheme } from "../../utils/theme";
import styles from "./Home.module.scss"; // Home.module.scss 파일을 가져옵니다.
import Header from "../../components/Header/Header";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectUser } from "../../store/auth/authSelectors";

const Home: React.FC = () => {
  useEffect(() => {
    const initialTheme = getInitialTheme();
    document.documentElement.setAttribute("data-theme", initialTheme);
  }, []);
  const user = useSelector(selectUser);
  useEffect(() => {
    console.log(user);
  }, [user]);
  const navigate = useNavigate();
  return (
    <div className={styles.homeContainer}>
      <Header />
      <div className={styles.centeredContent}>
        <h1 className={styles.heading}>소설 창작의 편리한 파트너</h1>
        <p className={styles.subHeading}>작품을 손쉽게 기록하고 관리하세요</p>
        <p className={styles.description}>
          소설 작가들이 작업을 더욱 편리하게 관리하고 창작에 집중할 수 있는 서비스입니다
        </p>
        <p className={styles.subHeading}>
          작품의 가치를 높이고, 빛을 발하게 해주는 파일 관리 솔루션으로 소개합니다
        </p>
        {user ? (
          <button className={styles.button} onClick={() => navigate("/document")}>
            시작하기
          </button>
        ) : (
          <button className={styles.button} onClick={() => navigate("/login")}>
            시작하기
          </button>
        )}
      </div>
      <div className={styles.rightSideContent}>
        <h1 className={styles.secHeading}>글을 쓰는 즐거움, 파일 관리의 간편함</h1>
        <p className={styles.description}>글 쓰는 과정을 더욱 즐겁게 만들며,</p>
        <p className={styles.description}>파일 관리를 효율적으로 수행할 수 있도록 도움을 줍니다</p>
      </div>
      <div className={styles.leftSideContent}>
        <h1 className={styles.secHeading}>작품에 AI 아트워크를 더하다</h1>
        <p className={styles.description}> 작품에 독특하고 아름다운 AI 생성 이미지를 통해</p>
        <p className={styles.description}>작가의 창작물을 더욱 풍부하게 만듭니다.</p>
      </div>
    </div>
  );
};

export default Home;
