import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { Container } from "./styles";

const Logo = () => {
  const history = useHistory();
  return (
    <Container>
      <button onClick={() => history.push("/")}>Luiz Felipe</button>
    </Container>
  );
};

export default Logo;
