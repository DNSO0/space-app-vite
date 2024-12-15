import styled from "styled-components"
import GlobalStyles from "./components/GlobalStyles"
import Cabecera from "./components/Cabecera"
import CampoTextoConIcono from "./components/CampoTexto"
import BarraLateral from "./components/BarraLateral"
import TituloEstilizado from './components/TituloEstilizado/TituloEstilizado';

const FondoGradiente = styled.div`
background: linear-gradient(174.61deg, #041833 4.16%, #04244F 48%, #154580 96.76%);
width: 100%;
min-height: 100vh;
`


function App() {
  
  return (
    <>
      <FondoGradiente>
        <GlobalStyles />
        <Cabecera />  
        <TituloEstilizado>Bienvenido a Space App</TituloEstilizado> 
        <BarraLateral/>    
      </FondoGradiente>
    </>
  )
}

export default App
