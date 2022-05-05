import { useHistory } from "react-router-dom";
import { useModalHandlers } from "../../providers/ModalHandlers";
import Logo from "../Logo";
import { Container } from "./styles";

const NavBar = () => {
  const history = useHistory();
  const { setShowModal } = useModalHandlers();
  return (
    <Container>
      <Logo />
      <ul>
        <li>
          <button onClick={() => history.push("/projetos")}>Projetos</button>
        </li>
        <li>
          <button onClick={() => setShowModal((prev) => !prev)}>Contato</button>
        </li>
      </ul>
    </Container>
  );
};

export default NavBar;
