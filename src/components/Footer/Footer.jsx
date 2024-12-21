// src/components/Footer/index.jsx
import styled from "styled-components";
import { FaGithub } from "react-icons/fa";

const FooterContainer = styled.footer`
    background-color: #04244F;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    color: white;
`;

const GitHubIcon = styled.a`
    color: white;
    text-decoration: none;
    display: flex;
    align-items: center;
`;

const Footer = () => {
    return (
        <FooterContainer>
            <GitHubIcon href="https://github.com/DNSO0" target="_blank" rel="noopener noreferrer">
                <FaGithub style={{ width: '24px', height: '24px', marginRight: '8px' }} />
                GitHub
            </GitHubIcon>
            <span>Desarrollado por Santiago Forero</span>
        </FooterContainer>
    );
};

export default Footer;