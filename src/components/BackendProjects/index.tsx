import { Container } from "./styles";
import { motion } from "framer-motion";

import React from "react";

const BackendProjects: React.FC = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 2 }}
    >
      <Container>
        <p>Nada por aqui ainda pessoal, mas estamos trabalhando nisso. :D</p>
      </Container>
    </motion.section>
  );
};

export default BackendProjects;
