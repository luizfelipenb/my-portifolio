import Routes from "./routes";

import { MainContainer, SectionContent } from "./styles";
import { useModalHandlers } from "./providers/ModalHandlers";

import ModalContact from "./components/ModalContact";
import NavBar from "./components/NavBar";

function App() {
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
}

export default App;
