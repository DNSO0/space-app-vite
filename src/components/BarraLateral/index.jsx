import styled from "styled-components";
import ItemNavegacion from "./ItemNavegacion";

const ListaEstilizada = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
`;

const BarraLateralContainer = styled.aside`
    display: flex;
    flex-direction: column; 
    width: 250px; 
    height: calc(100vh - 60px); 
    padding-left: 12px;
`;

const BarraLateral = () => {
    return (
        <BarraLateralContainer>
            <nav>
                <ListaEstilizada>
                    <ItemNavegacion iconoActivo="iconos/home-activo.png" iconoInactivo="iconos/home-inactivo.png" activo>
                        Inicio
                    </ItemNavegacion>
                    <ItemNavegacion iconoActivo="iconos/mas-visas-activo.png" iconoInactivo="iconos/mas-vistas-inactivo.png">
                        Más visitados
                    </ItemNavegacion>
                    <ItemNavegacion iconoActivo="iconos/me-gusta-activo.png" iconoInactivo="iconos/me-gusta-inactivo.png">
                        Más Me Gusta
                    </ItemNavegacion>
                    <ItemNavegacion iconoActivo="iconos/nuevas-activo.png" iconoInactivo="iconos/nuevas-inactivo.png">
                        Nuevas
                    </ItemNavegacion>
                    <ItemNavegacion iconoActivo="iconos/sorprendeme-activo.png" iconoInactivo="iconos/sorprendeme-inactivo.png">
                        Sorpréndeme
                    </ItemNavegacion>
                </ListaEstilizada>
            </nav>
        </BarraLateralContainer>
    );
};

export default BarraLateral;