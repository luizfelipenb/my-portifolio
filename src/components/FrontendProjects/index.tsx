import { Container } from "./styles";
import { motion } from "framer-motion";

import projects from "../../mock/tecnologies";

import React, { useState } from "react";
import ModalActionsProject from "../ModalActionsProject";

const FrontendProjects: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
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
            <li onClick={() => setShowModal((prev) => !prev)}>
              {showModal && <ModalActionsProject projectData={project} />}
              <h3>{project.name}</h3>
              <img src={project.img_url} alt="imagem kenzie bico" />
            </li>
          ))}
        </ul>
      </Container>
    </motion.section>
  );
};
export default FrontendProjects;
