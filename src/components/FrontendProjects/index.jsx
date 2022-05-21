import { Container } from "./styles";
import { motion } from "framer-motion";

import projects from "../../mock/tecnologies";

const FrontendProjects = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 2 }}
    >
      <Container>
        <ul className="listProjects">
          {projects.map((project) => (
            <li>
              <a
                href={project.url}
                target="blank"
                role="tooltip"
                aria-label={
                  "Tecnologias utilizadas:     " + project.tecnologies
                }
              >
                <h3>{project.name}</h3>
                <img src={project.img_url} alt="imagem kenzie bico" />
              </a>
            </li>
          ))}
        </ul>
      </Container>
    </motion.section>
  );
};
export default FrontendProjects;
