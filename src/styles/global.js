import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

body{
  height: 100vh;
    margin: 0;
    padding: 0;
  font-family: 'Montserrat', sans-serif;
  color: #fff;
  ul{
    list-style: none;
}

a{
    text-decoration: none;
}
button{
  cursor: pointer;
}
}



`;

export default GlobalStyle;
