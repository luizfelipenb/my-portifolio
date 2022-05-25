import { useHistory } from "react-router-dom";
import { Container } from "./styles";
import { FaHome } from "react-icons/fa";

import React from "react";

const Logo: React.FC = () => {
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
