import { Container, SectionName, SectionDescription } from "./styles";
import { BsLinkedin, BsGithub, BsFileEarmarkTextFill } from "react-icons/bs";

const Dashboard = () => {
  return (
    <Container>
      <SectionName>
        <h1>Luiz Felipe</h1>
        <div></div>
        <ul>
          <li>
            <a
              href="https://www.linkedin.com/in/luizfelipeop/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsLinkedin size={30} color="#1a7431" />
            </a>
          </li>
          <li>
            <a
              href="https://github.com/luizfelipenb"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsGithub size={30} color="#1a7431" />
            </a>
          </li>
          <li>
            <a href="/" target="_blank" rel="noopener noreferrer">
              <BsFileEarmarkTextFill size={30} color="#1a7431" />
            </a>
          </li>
        </ul>
      </SectionName>
      <SectionDescription>
        <h4>Profile</h4>
        <h2>Frontend Web Developer</h2>
        <p>
          Olá, meu nome é <strong>Luiz Felipe</strong>, tenho 26 anos. Minha
          conexão com tecnologia começou no inicio da internet com os blogs de
          filmes daquela época. Trabalhei no setor logistico até que decidi dar
          uma chance a algo que eu sabia que ia gostar de fazer então encerrei
          essa etapa da minha vida e dei inicio a uma nova na
          <a
            href="https://kenzie.com.br/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <strong> Kenzie Academy</strong>
          </a>
          . Hoje meu objetivo é me desenvolver e contribuir para humanidade
          nesta área cheia de possibilidades .
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
        </ul>
        <span>Aprendendo *</span>
      </SectionDescription>
    </Container>
  );
};
export default Dashboard;
