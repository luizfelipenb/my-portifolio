import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  p {
    color: #ccc;
    line-height: 1.5em;

    a {
      color: #fff;
      text-decoration: none;
      :hover {
        color: rgba(255, 255, 255, 0.7);
      }
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
    p {
      font-size: 20px;
    }
  }
`;
