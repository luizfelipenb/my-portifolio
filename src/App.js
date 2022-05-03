import NavBar from "./components/NavBar";
import Routes from "./routes";
import { MainContainer } from "./styles";
import GlobalStyle from "./styles/global";

function App() {
  return (
    <MainContainer>
      <GlobalStyle />
      <NavBar />
      <Routes />
    </MainContainer>
  );
}

export default App;
