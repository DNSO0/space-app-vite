import styled from 'styled-components';
import bannerImage from '../../assets/banner.png';

const BannerContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start; /* Alinea el contenido a la izquierda */
  background-image: url(${bannerImage});
  background-size: cover;
  background-position: center;  
  height: 280px; /* Ajusta la altura según sea necesario */
  width: 100%; /* Asegúrate de que el banner ocupe el 100% del ancho */
  padding: 20px; /* Espaciado interno */
  color: white; /* Color del texto */
  border-radius: 15px; /* Ajusta el valor según sea necesario */
  box-sizing: border-box; /* Incluye el padding en el ancho total */
`;

const TextoBanner = styled.h2`
  margin: 0; /* Eliminar márgenes */
  font-size: 2rem; /* Tamaño del texto */
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.7); /* Sombra para mayor contraste */
  line-height: 1.2; /* Ajusta el espacio entre líneas */
`;

const BannerEstilizado = () => {
  return (
    <BannerContainer>
      <TextoBanner>
        La galería más<br />
        completa del<br />
        espacio
      </TextoBanner>
    </BannerContainer>
  );
};

export default BannerEstilizado;