import React from "react";

const Home: React.FC = () => {
  return (
    <div>
      <p>
        <a href="/login">로그인페이지로 이동</a>
      </p>
      <p>
        <a href="/register">회원가입페이지로 이동</a>
      </p>
    </div>
  );
};

export default Home;
