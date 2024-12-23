import styled from "styled-components";
import GlobalStyles from "./components/GlobalStyles";
import Cabecera from "./components/Cabecera";
import BarraLateral from "./components/BarraLateral";
import BannerEstilizado from "./components/BannerEstilizado";
import Galeria from "./components/Galeria";
import { useState, useEffect } from "react";
import ModalZoom from "./components/ModalZoom";
import Tags from "./components/Galeria/Tags";
import CampoTextoConIcono from "./components/CampoTexto";
import Footer from "./components/Footer/Footer";
import Cargando from "./components/Cargando";
import GlobalContextProvider from "./context/GlobalContext";

const FondoGradiente = styled.div`
  background: linear-gradient(
    174.61deg,
    #041833 4.16%,
    #04244f 48%,
    #154580 96.76%
  );
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
`;

const App = () => {
  return (
    <GlobalContextProvider>
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
              <Galeria />
            </ContenidoGaleria>
          </ContenedorPrincipal>
        </ContenedorContenido>
        <ModalZoom />
        <Footer />
      </FondoGradiente>
    </GlobalContextProvider>
  );
};

export default App;
