import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { loginRequest } from "../../store/auth/authActions";

import styles from "./Auth.module.scss";

const Register: React.FC = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({ username: "", password: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(loginRequest(formData));
  };

  return (
    <div className={styles.authContainer}>
      <h2>회원가입</h2>
      <form className={styles.authForm} onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">사용자 이름</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="password">비밀번호</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className={styles.registerButton}>
          회원가입
        </button>
      </form>
    </div>
  );
};

export default Register;
