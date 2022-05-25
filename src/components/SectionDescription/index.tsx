import { Container } from "./styles";

import React from "react";

const SectionDescription: React.FC = () => {
  return (
    <Container>
      <h4>Profile</h4>
      <h2>Frontend Web Developer</h2>
      <p>
        Olá, meu nome é{" "}
        <a
          href="https://www.linkedin.com/in/luizfelipeop/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <strong> Luiz Felipe</strong>
        </a>
        , tenho 26 anos. Minha conexão com tecnologia começou no inicio da
        internet com os blogs de filmes daquela época. Trabalhei no setor
        logistico até que decidi dar uma chance a algo que eu sabia que ia
        gostar de fazer então encerrei essa etapa da minha vida e dei inicio a
        uma nova na
        <a
          href="https://kenzie.com.br/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <strong> Kenzie Academy</strong>
        </a>
        . Hoje meu objetivo é me desenvolver e contribuir para humanidade nesta
        área cheia de possibilidades .
      </p>
      <h4>Tecnologias</h4>
      <ul>
        <li>React</li>
        <li>Javascript ES6+</li>
        <li>Context API</li>
        <li>Redux</li>
        <li>Styled Components</li>
        <li>Git</li>
        <li>HTML5</li>
        <li>CSS3</li>
        <li>Typescript *</li>
        <li>Node JS *</li>
        <li>Postgre SQL *</li>
        <li>Docker *</li>
        <li>Type ORM *</li>
        <li>Prisma</li>
      </ul>
      <span>Aprendendo *</span>
    </Container>
  );
};

export default SectionDescription;
