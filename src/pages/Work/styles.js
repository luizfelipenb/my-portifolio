import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  .sectionStacks {
    margin-top: 20px;
    ul {
      margin: 30px 0 0 0;
      padding: 0;
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      gap: 30px;
      li {
        gap: 17px;
        margin: 0;
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        img {
          width: 250px;
          border-radius: 30px;
        }
        button {
          padding: 15px;
          margin-bottom: 8px;
          border-radius: 10px;
          border: none;
          color: #fff;
          background-color: #000;
        }
      }
    }
  }

  @media screen and (min-width: 768px) {
    .sectionStacks {
      ul {
        flex-flow: row wrap;
      }
    }
  }
  @media screen and (min-width: 1440px) {
    .sectionStacks {
      ul {
        li {
          img {
            width: 300px;
          }
          button {
            padding: 20px;
            font-size: 25px;
          }
        }
      }
    }
  }
`;
