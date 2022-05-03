import styled from "styled-components";

export const Container = styled.section`
  margin-top: 10px;
  button {
    font-size: 18px;
    font-weight: bold;
    font-family: "Water Brush", cursive;
    color: #fff;
    text-shadow: 2px 2px 2px #000;
    border: none;
    background: none;
    transition: all ease-in-out 0.25s;
    &:hover {
      border-bottom: 5px solid #1a7431;
    }
    @media screen and (min-width: 1024px) {
      font-size: 20px;
    }
  }
`;
