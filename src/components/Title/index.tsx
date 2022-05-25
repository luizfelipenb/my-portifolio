import { Container } from "./styles";
import { AiOutlineRight, AiOutlineLeft } from "react-icons/ai";

import React from "react";

interface Props {
  setShowFrontProjects: React.Dispatch<React.SetStateAction<boolean>>;
  setShowBackProjects: React.Dispatch<React.SetStateAction<boolean>>;
  children: React.ReactNode;
}

const Title: React.FC<Props> = ({
  setShowFrontProjects,
  setShowBackProjects,
  children,
  ...rest
}) => {
  return (
    <Container {...rest}>
      <span>
        <AiOutlineLeft
          size={23}
          scale="1"
          onClick={() =>
            children === "Frontend" && setShowFrontProjects((prev) => !prev)
          }
          cursor="pointer"
          color={children === "Frontend" ? "red" : "white"}
        />
        {children}
        <strong> / </strong>
        <AiOutlineRight
          size={23}
          onClick={() =>
            children === "Backend" && setShowBackProjects((prev) => !prev)
          }
          cursor="pointer"
          color={children === "Backend" ? "red" : "white"}
        />
      </span>
    </Container>
  );
};

export default Title;
