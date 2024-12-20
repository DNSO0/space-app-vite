import Titulo from "../Titulo"
import Tag from "./Tags"
import Populares from "./Populares"
import styled from "styled-components"

const GaleriaContainer = styled.div`
    display: flex;
`

const SeccionFluida = styled.section`
    flex-grow: 1;
`

const Galeria = ()=> {
    return (
    <>    
        <Tag />
        <GaleriaContainer>
            <SeccionFluida>
                <Titulo>Navegue por la galería</Titulo>

            </SeccionFluida>
            <Populares />
        </GaleriaContainer>
    </>
    )
}

export default Galeria