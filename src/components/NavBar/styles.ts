import styled from "styled-components";

export const Container = styled.nav`
  /* background-color: rgba(255, 255, 255, 0.3); */
  /* backdrop-filter: blur(7px); */
  margin-top: 10px;
  display: flex;
  justify-content: space-around;
  align-items: center;

  ul {
    display: flex;
    align-items: center;
    gap: 15px;
    height: 40px;
    margin: 0;
    padding: 0;

    li {
      button {
        font-weight: bold;
        font-size: 13px;
        font-family: "Montserrat", sans-serif;
        color: #fff;
        text-shadow: 2px 2px 2px #000;
        border: none;
        background: none;
        transition: all ease-in-out 0.25s;
        &:hover {
          border-bottom: 5px solid #1a7431;
        }
        &:focus-within {
          text-decoration: line-through;
        }
      }
      padding: 5px;
    }
  }

  @media screen and (min-width: 1024px) {
    ul {
      li {
        button {
          font-size: 20px;
        }
      }
    }
  }
`;
