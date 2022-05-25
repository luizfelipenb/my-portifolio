import { Container } from "./styles";
import { AiOutlineRight, AiOutlineLeft } from "react-icons/ai";

import React from "react";

interface Props {
  setShowFrontProjects: React.Dispatch<React.SetStateAction<boolean>>;
  setShowBackProjects: React.Dispatch<React.SetStateAction<boolean>>;
  children: React.ReactNode;
}

const handleVariation = (text: string) => {
  if (text === "Frontend") {
    return "red";
  }
  if (text === "Backend") {
    return "red";
  }
};

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
          // color={() => handleVariation(children)}
        />
        {children}
        <strong> / </strong>
        <AiOutlineRight
          size={23}
          onClick={() =>
            children === "Backend" && setShowBackProjects((prev) => !prev)
          }
          cursor="pointer"
          // color={children === "Backend" && "red"}
        />
      </span>
    </Container>
  );
};

export default Title;
