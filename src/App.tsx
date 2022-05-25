import Routes from "./routes";
import React from "react";

import { MainContainer, SectionContent } from "./styles";
import { useModalHandlers } from "./providers/ModalHandlers";

import ModalContact from "./components/ModalContact";
import NavBar from "./components/NavBar";

const App: React.FC = () => {
  const { showModal } = useModalHandlers();
  return (
    <MainContainer>
      <NavBar />
      {showModal && <ModalContact />}
      <SectionContent>
        <Routes />
      </SectionContent>
    </MainContainer>
  );
};

export default App;
