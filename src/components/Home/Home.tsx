// Home.tsx

import React, { useEffect } from "react";
import { getInitialTheme } from "../../utils/theme";
import ThemeToggle from "../ThemeToggle";
import styles from "./Home.module.scss"; // Home.module.scss 파일을 가져옵니다.

const Home: React.FC = () => {
  useEffect(() => {
    const initialTheme = getInitialTheme();
    document.documentElement.setAttribute("data-theme", initialTheme);
  }, []);

  return (
    <div className={styles.homeContainer}>
      <p>
        <a href="/login">로그인페이지로 이동</a>
      </p>
      <p>
        <a href="/register">회원가입페이지로 이동</a>
      </p>
      <ThemeToggle />
    </div>
  );
};

export default Home;
