import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    gap: 100px;
  }
  @media screen and (min-width: 1024px) {
    gap: 300px;
  }
`;

export const SectionName = styled.section`
  display: flex;
  flex-direction: column;
  align-self: flex-start;
  margin-left: 10px;
  width: 50%;
  h1 {
    margin: 0;
    padding: 10px;
    width: 10px;
    font-size: 50px;
    font-weight: bold;
    /* margin-left: 10px; */
  }
  div {
    width: 100px;
    height: 10px;
    background-color: #1a7431;
    margin-left: 13px;
  }

  ul {
    margin: 15px 0 0 13px;
    padding: 0;
    display: flex;
    gap: 10px;
  }

  @media screen and (min-width: 768px) {
    margin-top: 40px;
  }
  @media screen and (min-width: 1024px) {
    margin-left: 30px;
    h1 {
      font-size: 80px;
    }
  }
  @media screen and (min-width: 1440px) {
    width: 30%;
    margin-top: 25px;
  }
`;

export const SectionDescription = styled.section`
  margin-left: 10px;
  p {
    color: #ccc;
    line-height: 1.5em;

    a {
      color: #fff;
      text-decoration: none;
    }
  }
  h4 {
    color: #1a7431;
    text-shadow: 2px 2px 2px #000;
    margin: 10px 0 5px 10px;
    :first-child {
      margin-top: 20px;
    }
  }
  h2 {
    margin: 0;
  }
  ul {
    display: flex;
    gap: 10px;
    flex-flow: row wrap;
    li {
      padding: 10px 10px;
      border-radius: 10px;
      background-color: rgba(0, 0, 0, 0.5);
    }
  }
  span {
    color: #ccc;
    font-size: 13px;
    margin-left: 15px;
  }
  @media screen and (min-width: 768px) {
    h4 {
      margin-left: 0;
    }
    span {
      margin-left: 0;
    }
  }
  @media screen and (min-width: 1024px) {
    p {
      font-size: 17px;
    }
  }

  @media screen and (min-width: 1440px) {
    width: 70%;
    p {
      font-size: 20px;
    }
  }
`;
