import { Container } from "./styles";
import kenziebico from "../../assets/bico-com.png";
import kenzieburguer from "../../assets/kenzie-burguer.png";
import formulario from "../../assets/signup-form.png";
import nukenzie from "../../assets/nukenzie.png";
import studiosmart from "../../assets/studio-smart.png";

const FrontendProjects = () => {
  const tecnologies = [
    {
      message:
        "React, Styled Components, React Router Dom, Context API, Framer Motion, JWT, React Rook Form, Yup",
    },
  ];
  return (
    <Container>
      <ul className="listProjects">
        <li>
          <a
            href="https://bico.vercel.app/"
            target="blank"
            role="tooltip"
            aria-label={"Tecnologias:     " + tecnologies[0].message}
          >
            <h3>Bico.com</h3>
            <img src={kenziebico} alt="imagem kenzie bico" />
          </a>
        </li>
        <li>
          <a
            href="https://kenzieburguer-wheat.vercel.app/"
            target="blank"
            role="tooltip"
          >
            <h3>Kenzie Burguer</h3>
            <img src={kenzieburguer} alt="imagem kenzie buguer" />
          </a>
        </li>
        <li>
          <a
            href="https://formulario-luiz.vercel.app/"
            target="blank"
            role="tooltip"
          >
            <h3>Formulário de cadastro</h3>
            <img src={formulario} alt="imagem formulario de cadastro" />
          </a>
        </li>
        <li>
          <a
            href="https://nukenzieluiz.vercel.app/"
            target="blank"
            role="tooltip"
          >
            <h3>Nukenzie</h3>
            <img src={nukenzie} alt="imagem nukenzie" />
          </a>
        </li>
        <li>
          <a
            href="https://studio-smart-luiz.vercel.app/"
            target="blank"
            role="tooltip"
          >
            <h3>Studio Smart</h3>
            <img src={studiosmart} alt="imagem studio smart" />
          </a>
        </li>
      </ul>
    </Container>
  );
};
export default FrontendProjects;
