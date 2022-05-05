import styled from "styled-components";

export const Container = styled.section`
  .listProjects {
    > li {
      border: 1px solid #fff;
      border-radius: 10px;

      transition: all ease-in-out 0.5s;
      &:hover {
        box-shadow: 10px 10px 5px 0px rgba(26, 116, 49, 0.75);
        -webkit-box-shadow: 10px 10px 5px 0px rgba(26, 116, 49, 0.75);
        -moz-box-shadow: 10px 10px 5px 0px rgba(26, 116, 49, 0.75);
      }
      a {
        color: #fff;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        &:hover::after {
          opacity: 1;
          pointer-events: all;
        }

        &::after {
          content: attr(aria-label);
          margin-left: 90px;
          margin-top: 70px;
          white-space: pre-wrap;
          pointer-events: none;
          transition: 1s;
          opacity: 0;
          color: #fff;
          background-color: #000;
          padding: 10px;
          border-radius: 8px;
          position: absolute;
          max-width: 150px;
        }
        img {
          border-radius: 8px;
        }
      }
    }
  }

  @media screen and (min-width: 768px) {
    width: 100%;
    .listProjects {
      width: 100%;
      display: flex;
    }
  }
`;
