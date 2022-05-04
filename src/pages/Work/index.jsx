import { useState } from "react";
import { Container } from "./styles";

import BackendProjects from "../../components/BackendProjects";
import FrontendProjects from "../../components/FrontendProjects";
import Title from "../../components/Title";

import frontendpic from "../../assets/frontend.gif";
import backendpic from "../../assets/backend.gif";

const Work = () => {
  const [showFrontProjects, setShowFrontProjects] = useState(false);
  const [showBackProjects, setShowBackProjects] = useState(false);
  return (
    <Container>
      <Title
        setShowFrontProjects={setShowFrontProjects}
        setShowBackProjects={setShowBackProjects}
      >
        {showFrontProjects
          ? "Frontend"
          : showBackProjects
          ? "Backend"
          : "Projetos"}
      </Title>
      <section className="sectionStacks">
        {showFrontProjects ? (
          <FrontendProjects />
        ) : showBackProjects ? (
          <BackendProjects />
        ) : (
          <ul>
            <li>
              <img src={frontendpic} alt="Frontend" />
              <button onClick={() => setShowFrontProjects(true)}>
                Projetos FrontEnd
              </button>
            </li>
            <li>
              <img src={backendpic} alt="" />
              <button onClick={() => setShowBackProjects(true)}>
                Projetos BackEnd
              </button>
            </li>
          </ul>
        )}
      </section>
    </Container>
  );
};

export default Work;
