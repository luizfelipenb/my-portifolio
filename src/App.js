import NavBar from "./components/NavBar";
import Routes from "./routes";
import { MainContainer, SectionContent } from "./styles";

function App() {
  return (
    <MainContainer>
      <NavBar />
      <SectionContent>
        <Routes />
      </SectionContent>
    </MainContainer>
  );
}

export default App;
