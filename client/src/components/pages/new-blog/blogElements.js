import styled from "styled-components";

export const BlogContainer = styled.div`
  max-width: 1350px;
  height: 100%;
  margin: 50px auto;
  padding: 0 30px;
`;

export const Form = styled.form`
  max-width: 600px;
  margin: 0 auto;
  padding: 40px 30px;
  background-color: white;
  height: 450px;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: center; */

  .title {
    margin-top: 30px !important;
  }
  .text-area {
    font-size: 16px;
    margin: 50px !important;
    width: 500px !important;
    @media screen and (max-width: 768px) {
      width: 300px !important;
    }

    @media screen and (max-width: 400px) {
      width: 200px !important;
    }
  }
`;
