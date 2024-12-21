import styled from 'styled-components';

const Titulo = styled.h1`
  font-size: 3rem; 
  color: #ffffff; 
  text-align: center; 
  margin: 20px 0; 
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5); 
`;

const TituloEstilizado = ({ children }) => {
  return <Titulo>{children}</Titulo>;
};

export default TituloEstilizado;