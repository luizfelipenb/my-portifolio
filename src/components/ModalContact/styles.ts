import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;

  > div {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    min-width: 250px;
    min-height: 60px;
    color: #000;
    background-color: #fff;
    border-radius: 10px;
    padding: 20px;
    svg {
      align-self: flex-end;
      cursor: pointer;
    }
    > a {
      text-decoration: none;
      color: #000;
      margin-top: 30px;
      gap: 10px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: larger;
    }
  }
`;
