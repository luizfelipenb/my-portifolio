import { Container } from "./styles";
import { BsLinkedin, BsGithub, BsFileEarmarkTextFill } from "react-icons/bs";

import React from "react";

import { motion } from "framer-motion";

const SectionName: React.FC = () => {
  return (
    <Container>
      <h1>Luiz Felipe</h1>
      <div></div>
      <ul>
        <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          <a
            href="https://www.linkedin.com/in/luizfelipeop/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsLinkedin size={30} color="#fff" />
          </a>
        </motion.li>
        <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          <a
            href="https://github.com/luizfelipenb"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsGithub size={30} color="#fff" />
          </a>
        </motion.li>
        <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          <a
            href="https://drive.google.com/file/d/159qsmfWaBN6pEdOF5N6CmCKIn611lLyx/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsFileEarmarkTextFill size={30} color="#fff" />
          </a>
        </motion.li>
      </ul>
    </Container>
  );
};
export default SectionName;
