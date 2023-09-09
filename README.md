# React TypeScript Redux Saga SCSS 연습 프로젝트

이 프로젝트는 React, TypeScript, Redux Toolkit, Redux Saga, SCSS를 사용해보기 위한 연습 프로젝트입니다.

## 폴더 구조

프로젝트의 폴더 구조는 다음과 같습니다:

```plaintext
| |-- components/
| | |-- Auth
| | | |-- Login.tsx       # 로그인 컴포넌트
| | | |-- Register.tsx    # 회원가입 컴포넌트
|-- store/
| |-- auth/
| | |-- authActions.ts    # 계정 관련 액션 관련 파일
| | |-- authReducer.ts    # 계정 관련 리듀서
| | |-- authSelectors.ts  # 계정 관련 셀렉터
| | |-- authSaga.ts       # 계정 관련 사가
| |-- rootReducer.ts      # 루트 리듀서
| |-- rootSaga.ts         # 루트 사가
| |-- configureStore.ts   # 스토어 설정 파일
|-- styles/
| |-- main.scss           # 전역 스타일 및 변수 정의
|-- App.tsx               # 앱 진입점
|-- index.tsx             # 앱 엔트리 포인트
```

## 기술 스택

이 프로젝트는 다음 기술 스택을 사용합니다:

- React
- TypeScript
- Redux Toolkit
- Redux Saga
- SCSS (CSS 전처리기)

## 실행 방법

프로젝트를 실행하는 방법은 다음과 같습니다:

1. 의존성 패키지 설치:

   ```bash
   npm install
   ```

2. 개발 서버 실행:

   ```bash
   npm start
   ```

프로젝트 실행에 필요한 모든 단계를 설명할 수도 있으며, 환경 변수 설정 등의 추가 정보도 제공할 수 있습니다.
