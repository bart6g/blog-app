import styled from "styled-components";

export const BlogContainer = styled.div`
  max-width: 1350px;
  padding: 30px 25px;
  margin: 50px auto;

  display: grid;

  justify-content: center;
  grid-template-columns: repeat(auto-fit, minmax(200px, 500px));
  grid-gap: 30px;
`;

export const BlogWrapper = styled.div`
  max-width: 500px;
  background-color: white;
  padding: 20px 30px;
  box-shadow: 0 7px 30px -10px rgba(150, 170, 180, 0.5);
  .likes {
    display: flex;
    align-items: center;
    /* justify-content: center; */
    font-size: 20px;
    svg {
      margin-right: 10px;
      color: gray;
    }
  }

  @media screen and (max-width: 1100px) {
    max-width: 800px !important;
  }
`;
