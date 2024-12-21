import styled from "styled-components";
import GlobalStyles from "./components/GlobalStyles";
import Cabecera from "./components/Cabecera";
import BarraLateral from "./components/BarraLateral";
import BannerEstilizado from "./components/BannerEstilizado";
import Galeria from "./components/Galeria";
import fotos from "./fotos.json"
import { useState, useEffect } from "react";
import ModalZoom from "./components/ModalZoom";
import Tags from "./components/Galeria/Tags";
import CampoTextoConIcono from "./components/CampoTexto";
import Footer from "./components/Footer/Footer";


const FondoGradiente = styled.div`
  background: linear-gradient(174.61deg, #041833 4.16%, #04244F 48%, #154580 96.76%);
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column; 
`;

const ContenedorContenido = styled.div`
  display: flex; 
  flex: 1; 
`;

const ContenedorBarraLateral = styled.div`
  width: 212px; 
  height: calc(100vh - 60px); 
`;

const ContenedorPrincipal = styled.div`
  flex: 1; 
  display: flex;
  flex-direction: column; 
  //align-items: center; 
  justify-content: flex-start; 
  padding: 20px; 
`;

const ContenidoGaleria = styled.section`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`


const App = ()=> {

  const [fotosDeGaleria, setFotosDeGaleria] = useState(fotos)
  const [filtro, setFiltro] = useState('')
  const [tag, setTag] = useState(0)
  const[fotoSeleccionada, setFotoSeleccionada] = useState(null)

  useEffect(() => {
    const fotosFiltradas = fotos.filter(foto => {
      const filtroPorTag = !tag || foto.tagId === tag;
      const filtroPorTitulo = !filtro || foto.titulo.toLowerCase().includes(filtro.toLowerCase())
      return filtroPorTag && filtroPorTitulo
    })
    setFotosDeGaleria(fotosFiltradas)
  }, [filtro, tag])

  const alAlternarFavorito = (foto) => {

    if (foto.id === fotoSeleccionada?.id) {
      setFotoSeleccionada({
        ...fotoSeleccionada,
        favorita: !fotoSeleccionada.favorita
      })

    }

    setFotosDeGaleria(fotosDeGaleria.map(fotoDeGaleria => {
      return {
        ...fotoDeGaleria,
        favorita: fotoDeGaleria.id === foto.id ? !foto.favorita : fotoDeGaleria.favorita
      }
    }))
  }

  return (
    <FondoGradiente>
      <GlobalStyles />
      <Cabecera 
          filtro={filtro}
          setFiltro={setFiltro}
      />
      <ContenedorContenido>
        <ContenedorBarraLateral>
          <BarraLateral />
        </ContenedorBarraLateral>
        <ContenedorPrincipal>
          <BannerEstilizado />
          <ContenidoGaleria>
            
            <Galeria 
            fotos={fotosDeGaleria} 
            alSeleccionarFoto={foto=>setFotoSeleccionada(foto)} 
            alAlternarFavorito={alAlternarFavorito}
            setTag={setTag} 
            />
          </ContenidoGaleria>
        </ContenedorPrincipal>
      </ContenedorContenido>
      <ModalZoom foto={fotoSeleccionada}
          alCerrar={() => setFotoSeleccionada(null)} 
          alAlternarFavorito={alAlternarFavorito}
           />
      <Footer />
    </FondoGradiente>
  );
}

export default App;