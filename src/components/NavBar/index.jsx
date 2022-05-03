import { useHistory } from "react-router-dom";
import Logo from "../Logo";
import { Container } from "./styles";

const NavBar = () => {
  const history = useHistory();

  return (
    <Container>
      <Logo />
      <ul>
        <li>
          <button onClick={() => history.push("/projetos")}>Projetos</button>
        </li>
        <li>
          <button onClick={() => history.push("/contato")}>Contato</button>
        </li>
      </ul>
    </Container>
  );
};

export default NavBar;
