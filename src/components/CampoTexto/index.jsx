import styled from "styled-components";
import { useRef } from "react";

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
  const cajaConsulta = useRef(null);
  return (
    <CampoTextoConIconoEstilizado>
      <InputEstilizado ref={cajaConsulta}
        type="text" placeholder="¿Qué estás buscando?" 

      //  onChange={(evento) => setFiltro(evento.target.value)} 
      />

      <Icono src="/img/search.png" alt="Buscar" 
      onClick={() => setFiltro(cajaConsulta.current.value)} />
    </CampoTextoConIconoEstilizado>
  );
};

export default CampoTextoConIcono;