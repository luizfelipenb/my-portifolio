import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
  height: 100%;
  > section {
    :first-child {
      align-self: flex-start;
      margin-left: 10px;
      width: 50%;
    }
    :nth-child(2) {
      margin-left: 10px;
      width: 100%;
    }
  }

  @media screen and (min-width: 768px) {
    flex-direction: row;
    gap: 100px;
  }
  @media screen and (min-width: 1024px) {
    gap: 300px;
  }
  @media screen and (min-width: 1440px) {
    > section {
      :first-child {
        align-self: flex-start;
        margin-left: 10px;
        width: 30%;
      }
      :nth-child(2) {
        margin-left: 10px;
        width: 70%;
      }
    }
  }
`;
