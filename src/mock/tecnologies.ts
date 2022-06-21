import kenziebico from "../assets/bico-com.png";
import kenzieburguer from "../assets/kenzie-burguer.png";
import formulario from "../assets/signup-form.png";
import nukenzie from "../assets/nukenzie.png";
import studiosmart from "../assets/studio-smart.png";

const projects = [
  {
    name: "Bico.com",
    url: "https://bico.vercel.app/",
    img_url: kenziebico,
    tecnologies:
      "React, Styled Components, React Router DOM, Context API, Framer Motion, JWT, React Rook Form, Yup, React Icons",
    description:
      "Plataforma para conectar prestadores de pequenos servicos a pessoas com intecao de contratar um determinado servico.",
    github_url: "google.com.br",
  },
  {
    name: "Kenzie Burguer",
    url: "https://kenzieburguer-wheat.vercel.app/",
    img_url: kenzieburguer,
    tecnologies: "React, INTL Number Format ",
    description:
      "Uma Pagina de interacao entre produtos disponiveis em uma hamburgueria e utilizacao de carrinho.",
    github_url: "google.com.br",
  },
  {
    name: "Formulário de cadastro",
    url: "https://formulario-luiz.vercel.app/",
    img_url: formulario,
    tecnologies:
      "React, React Router DOM, React Hook Form, Styled Components, Yup",
    description: "Um Formulario de cadastro de usuario.",
    github_url: "google.com.br",
  },
  {
    name: "Nukenzie",
    url: "https://nukenzieluiz.vercel.app/",
    img_url: nukenzie,
    tecnologies:
      "React, React Router DOM, React Icons, Styled Components, INTL Number Format",
    description:
      "Uma Plataforma de controle financeiro. Permite fazer lancamentos de creditos e debitos",
    github_url: "google.com.br",
  },
  {
    name: "Studio Smart",
    url: "https://studio-smart-luiz.vercel.app/",
    img_url: studiosmart,
    tecnologies:
      "React, React Router DOM, React Icons, Styled Components, UUID, Framer motion, Yup, Axios",
    description: "Uma plataforma Kanban.",
    github_url: "google.com.br",
  },
];

export default projects;
