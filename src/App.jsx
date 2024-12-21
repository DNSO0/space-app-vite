import styled from "styled-components";
import GlobalStyles from "./components/GlobalStyles";
import Cabecera from "./components/Cabecera";
import BarraLateral from "./components/BarraLateral";
import BannerEstilizado from "./components/BannerEstilizado";
import Galeria from "./components/Galeria";
import fotos from "./fotos.json"
import { useState } from "react";
import ModalZoom from "./components/ModalZoom";

const FondoGradiente = styled.div`
  background: linear-gradient(174.61deg, #041833 4.16%, #04244F 48%, #154580 96.76%);
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column; /* Organiza los elementos en columna */
`;

const ContenedorContenido = styled.div`
  display: flex; /* Coloca la barra lateral y el contenido uno al lado del otro */
  flex: 1; /* Ocupa el espacio restante */
`;

const ContenedorBarraLateral = styled.div`
  width: 212px; /* Ancho fijo para la barra lateral, igual al ancho del logo */
  height: calc(100vh - 60px); /* Ajusta la altura para que ocupe el espacio restante debajo de la cabecera */
`;

const ContenedorPrincipal = styled.div`
  flex: 1; /* Ocupa el espacio restante */
  display: flex;
  flex-direction: column; /* Coloca el banner en columna */
  //align-items: center; /* Centra el contenido horizontalmente */
  justify-content: flex-start; /* Alinea el contenido al inicio */
  padding: 20px; /* Espaciado alrededor del contenido */
`;

const ContenidoGaleria = styled.section`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`


const App = ()=> {

  const [fotosDeGaleria, setFotosDeGaleria] = useState(fotos)
  const[fotoSeleccionada, setFotoSeleccionada] = useState(null)

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
      <Cabecera />
      <ContenedorContenido>
        <ContenedorBarraLateral>
          <BarraLateral />
        </ContenedorBarraLateral>
        <ContenedorPrincipal>
          <BannerEstilizado />
          <ContenidoGaleria>
            <Galeria fotos={fotosDeGaleria} alSeleccionarFoto={foto=>setFotoSeleccionada(foto)} alAlternarFavorito={alAlternarFavorito} />
          </ContenidoGaleria>
        </ContenedorPrincipal>
      </ContenedorContenido>
      <ModalZoom foto={fotoSeleccionada}
          alCerrar={() => setFotoSeleccionada(null)}
           />
    </FondoGradiente>
  );
}

export default App;