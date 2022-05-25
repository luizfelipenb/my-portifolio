import styled from "styled-components";

export const MainContainer = styled.main`
  width: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;

  @media screen and (min-width: 768px) {
    height: 100vh;
  }
`;

export const SectionContent = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 2rem;

  @media screen and (min-width: 768px) {
    height: 100%;
  }

  @media screen and (min-width: 1440px) {
    margin-top: 1rem;
  }
`;
