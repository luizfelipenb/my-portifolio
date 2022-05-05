import { Container } from "./styles";

import projects from "../../mock/tecnologies";

const FrontendProjects = () => {
  return (
    <Container>
      <ul className="listProjects">
        {projects.map((project) => (
          <li>
            <a
              href={project.url}
              target="blank"
              role="tooltip"
              aria-label={"Tecnologias utilizadas:     " + project.tecnologies}
            >
              <h3>{project.name}</h3>
              <img src={project.img_url} alt="imagem kenzie bico" />
            </a>
          </li>
        ))}
      </ul>
    </Container>
  );
};
export default FrontendProjects;
