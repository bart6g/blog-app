import styled, { css } from "styled-components";

export const PageContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: #f4f4f4;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: #f4f4f4;
`;

export const PageWrapper = styled.div`
  max-width: 1350px;
  margin: 0 auto;
  padding: 40px 30px;
  width: 350px;
  height: ${({ isLogin }) => (isLogin ? "400px" : "540px")};

  /* height: 100%; */
  background-color: white;
  box-shadow: 0 7px 30px -10px rgba(150, 170, 180, 0.5);
  ${({ registerSuccess }) =>
    registerSuccess &&
    css`
      height: 300px !important;
    `}
  @media screen and (max-width: 768px) {
    margin: 0 20px;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  text-align: center;

  height: 100%;
  h2 {
    color: #303f9f;
  }
  p {
    margin-top: 10px;
    margin-bottom: 40px;
  }
  .login {
    margin: 10px 0;
  }

  .toggle {
    background-color: transparent;
    border: none;
    outline: none;
    font-size: 16px;
    font-weight: 600;
    color: #303f9f;
    cursor: pointer;
    margin-left: 5px;
  }

  .submit {
    width: 60%;
    margin: 50px auto 0 auto;
  }
  .msg {
    display: block;
    margin-top: 10px;
    font-weight: 600;
    color: red;
  }

  ${({ registerSuccess }) =>
    registerSuccess &&
    css`
      display: flex;
      justify-content: center;
      align-items: center;
      .submit {
        margin: 0 auto;
        /* margin-bottom: 30px; */
      }
      .msg {
        color: black;
      }
    `}
`;
