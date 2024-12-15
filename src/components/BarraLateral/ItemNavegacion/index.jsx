import styled from "styled-components"

const ItemLstaEstilizado = styled.li`

`

const ItemNavegacion=({children, iconoActivo, iconoInactivo, activo=false})=>{
    return <ItemLstaEstilizado>
        <img src={activo ? iconoActivo : iconoInactivo} alt="Icono" />
        {children}
    </ItemLstaEstilizado>
}
export default ItemNavegacion