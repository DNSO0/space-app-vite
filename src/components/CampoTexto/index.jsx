import styled from "styled-components";

const CampoTextoConIconoEstilizado = styled.div`
  position: relative;
  width: 100%;
`;

const InputEstilizado = styled.input`
  width: 100%;
  padding: 10px 40px; 
  border: 2px solid rgb(78, 70, 128); 
  border-radius: 4px;
  font-size: 16px;
  outline: none;
  background: transparent;
  color: white;
  box-sizing: border-box;
 
  
  &::placeholder {
    color: rgb(255, 255, 255); 
  }
`;

const Icono = styled.img`
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  width: 20px;
  height: 20px; 
`;

const CampoTextoConIcono = ({ setFiltro }) => {
  return (
    <CampoTextoConIconoEstilizado>
      <InputEstilizado  onChange={(evento) => setFiltro(evento.target.value)} type="text" placeholder="¿Qué estás buscando?" />
      <Icono src="/img/search.png" alt="Buscar" />
    </CampoTextoConIconoEstilizado>
  );
};

export default CampoTextoConIcono;