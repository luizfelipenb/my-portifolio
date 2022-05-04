import { Container } from "./styles";
import { AiOutlineRight, AiOutlineLeft } from "react-icons/ai";

const Title = ({
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
          color={children === "Frontend" && "red"}
        />
        {children}
        <strong> / </strong>
        <AiOutlineRight
          size={23}
          onClick={() =>
            children === "Backend" && setShowBackProjects((prev) => !prev)
          }
          cursor="pointer"
          color={children === "Backend" && "red"}
        />
      </span>
    </Container>
  );
};

export default Title;
