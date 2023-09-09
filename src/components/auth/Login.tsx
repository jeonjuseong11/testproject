import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { loginRequest } from "../../store/auth/authActions";
import { getInitialTheme, setTheme, toggleTheme } from "../../utils/theme";

import styles from "./Auth.module.scss";

const Login: React.FC = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({ username: "", password: "" });
  const [currentTheme, setCurrentTheme] = useState(() => {
    const initialTheme = getInitialTheme();
    setTheme(initialTheme); // 초기 테마 설정을 로컬 스토리지에 저장
    return initialTheme;
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(loginRequest(formData));
  };

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", currentTheme);
  }, [currentTheme]);

  useEffect(() => {
    setCurrentTheme(getInitialTheme());
  }, []);

  const toggleAndSetTheme = () => {
    toggleTheme();
    setCurrentTheme(getInitialTheme());
  };

  return (
    <div className={styles.authContainer}>
      <h1>로그인</h1>
      <form className={styles.authForm} onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            placeholder="아이디"
            onChange={handleChange}
          />
        </div>
        <div>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            placeholder="비밀번호"
            onChange={handleChange}
          />
        </div>
        <button type="submit" className={styles.loginButton}>
          로그인
        </button>
        <p>
          Fluma 회원이 아닌가요? <a href="/register">지금 가입하세요</a>
        </p>
      </form>
      <div className={styles.themeToggle}>
        <label className={styles.switch}>
          <input type="checkbox" checked={currentTheme === "dark"} onChange={toggleAndSetTheme} />
          <span className={styles.slider}></span>
        </label>
        <span className={styles.themeText}>
          {currentTheme === "light" ? "라이트 모드" : "다크 모드"}
        </span>
      </div>
    </div>
  );
};

export default Login;
