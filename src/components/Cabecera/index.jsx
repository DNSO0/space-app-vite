import styled from "styled-components";
import CampoTextoConIcono from "../CampoTexto";
import { useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext";

const HeaderEstilizado = styled.header`
    padding: 60px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const Logo = styled.img`
    width: 212px;
`;

const InputContainer = styled.div`
    width: calc(50%); 
`;

const Cabecera = () => {
    const {setFiltro} = useContext(GlobalContext);

    return (
        <HeaderEstilizado>
            <Logo src="img/logo.png" alt="Logo de Space App" />
            <InputContainer>
            <CampoTextoConIcono setFiltro={setFiltro} />
            </InputContainer>
        </HeaderEstilizado>
    );
};

export default Cabecera;