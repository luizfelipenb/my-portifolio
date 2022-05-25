import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-self: flex-start;
  margin-left: 10px;
  width: 100%;
  h1 {
    margin: 0;
    padding: 10px;
    width: 10px;
    font-size: 50px;
    font-weight: bold;
  }
  div {
    width: 100px;
    height: 10px;
    background-color: #1a7431;
    margin-left: 13px;
  }

  ul {
    margin: 20px 0 0 13px;
    padding: 0;
    display: flex;
    gap: 10px;
  }

  @media screen and (min-width: 768px) {
    margin-top: 7rem;
  }
  @media screen and (min-width: 1024px) {
    margin-left: 30px;
    h1 {
      font-size: 80px;
    }
    div {
      width: 120px;
    }
  }
  @media screen and (min-width: 1440px) {
    margin-top: 15rem;
  }
`;
