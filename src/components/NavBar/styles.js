import styled from "styled-components";

export const Container = styled.nav`
  background-color: rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(7px);
  display: flex;
  justify-content: space-around;
  align-items: center;

  ul {
    display: flex;
    align-items: center;
    gap: 5px;
    height: 40px;
    margin: 0;
    padding: 0;

    li {
      button {
        font-weight: bold;
        font-size: 13px;
        font-family: "Montserrat", sans-serif;
        color: #fff;
        border: none;
        background: none;
      }
      padding: 5px;
    }
  }
`;
