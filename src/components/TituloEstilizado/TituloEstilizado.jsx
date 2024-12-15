import styled from 'styled-components';

const Titulo = styled.h1`
  font-size: 3rem; /* Tamaño grande */
  color: #ffffff; /* Color blanco para destacar en fondo oscuro */
  text-align: center; /* Centrar el texto */
  margin: 20px 0; /* Espaciado superior e inferior */
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5); /* Sombra para mayor contraste */
`;

const TituloEstilizado = ({ children }) => {
  return <Titulo>{children}</Titulo>;
};

export default TituloEstilizado;