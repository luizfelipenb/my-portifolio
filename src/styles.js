import styled from "styled-components";

export const MainContainer = styled.main`
  background: #232526;
  background: -webkit-linear-gradient(to right, #414345, #232526);
  background: linear-gradient(to right, #414345, #232526);
  /* height: 100vh; */
  width: 100vw;
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 768px) {
    height: 100vh;
  }
`;

export const SectionContent = styled.section`
  width: 100%;
  height: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  @media screen and (min-width: 768px) {
    height: 100%;
  }
`;
