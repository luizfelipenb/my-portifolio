import React from "react";
import { ProjectData } from "../../interfaces/ProjectData";
import { Container } from "./styles";

const ModalActionsProject: React.FC<{
  projectData: ProjectData;
}> = ({ projectData }) => {
  return (
    <Container>
      <h1>{projectData.name}</h1>
      <p>{projectData.description}</p>
      <h3>Tecnologias utilizadas:</h3>
      <p>{projectData.tecnologies}</p>
      <h4>Link do repositorio:</h4>
      <a href={projectData.github_url} target="blank"></a>
    </Container>
  );
};

export default ModalActionsProject;
