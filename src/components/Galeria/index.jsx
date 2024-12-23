import styled from "styled-components"
import Titulo from "../Titulo"
import Populares from "./Populares"
import Tag from "./Tags"
import Imagen from "./Imagen"
import { useContext } from "react"
import { GlobalContext } from "../../context/GlobalContext"
import Cargando from "../Cargando"

const GaleriaContainer = styled.div`
display: flex;
gap: 24px;

`

const SeccionFluida = styled.section`
flex-grow: 1;
`
const ImagenesContainer = styled.section`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 24px;
`


const Galeria = () => {

    const {filtro, fotosDeGaleria, setTag, alSeleccionarFoto, alAlternarFavorito, setFotoSeleccionada} = useContext(GlobalContext);
    
    return (
      

        fotosDeGaleria.length == 0 ?
    <Cargando></Cargando> :
        <>
            <Tag  setTag={setTag}  />
            <GaleriaContainer>
                <SeccionFluida>
                    <Titulo>Navegue por la galería</Titulo>
                    <ImagenesContainer>
                        {fotosDeGaleria.map(foto => <Imagen
                        alAlternarFavorito= {alAlternarFavorito}
                        alSolicitarZoom={foto => setFotoSeleccionada(foto)}
                            key={foto.id}
                            foto={foto} />)
                        }
                    </ImagenesContainer>
                </SeccionFluida>
                <Populares />

            </GaleriaContainer>
        </>
    )
}

export default Galeria