import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { Container } from "./styles";
import { FaHome } from "react-icons/fa";

const Logo = () => {
  const history = useHistory();
  return (
    <Container>
      <button onClick={() => history.push("/")}>
        <FaHome size={25} color="#fff" />
      </button>
    </Container>
  );
};

export default Logo;
