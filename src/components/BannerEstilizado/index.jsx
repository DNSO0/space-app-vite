import styled from 'styled-components';
import bannerImage from '../../assets/banner.png';

const BannerContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start; 
  background-image: url(${bannerImage});
  background-size: cover;
  background-position: center;  
  height: 280px; 
  width: 100%; 
  padding: 20px; 
  color: white; 
  border-radius: 15px;
  box-sizing: border-box; 

  @media (max-width: 768px) {
    height: 200px; 
    padding: 10px; 
  }
`;

const TextoBanner = styled.h2`
  margin: 0; 
  font-size: 2rem; 
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.7); 
  line-height: 1.2; 
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