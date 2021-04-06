import React from 'react';
import styled from 'styled-components';

import { device } from '../../styled';

const AboutSection = styled.section`
    height:auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-top:2%;
    padding-bottom:2%;
    margin-top: 10px;

    h2{
        text-align:center;
        font-weight: lighter;
        font-size: 1.25vw;
        width: 80%;
    }

    @media ${device.mobileS}{
        h2{
            font-size:5vw;
            padding-right: 5%;
            padding-left: 5%;
            text-align: justify;
        }
    }

    @media ${device.mobileM}{
        h2{
            font-size:5vw;
            padding-right: 5%;
            padding-left: 5%;
            text-align: justify;
        }
    }

    @media ${device.mobileL}{
        h2{
            font-size:5vw;
            padding-right: 5%;
            padding-left: 5%;
            text-align: justify;
        }
    }
    @media ${device.tablet}{
        h2{
            font-size:1.7vw;
        }
    }

`;

const SectionTitleFont = styled.p`
    font-size: 2vw;
    font-weight: lighter;
    text-align: center;
    
    @media ${device.mobileS}{
        font-size: 7vw;
    }
    @media ${device.mobileM}{
        font-size: 7vw;
    }
    @media ${device.mobileL}{
        font-size: 7vw;
    }
    @media ${device.tablet}{
        font-size: 4vw;
    }
`;

function HomeSectionAbout(){

    return(
        <AboutSection id="about">
            <SectionTitleFont>SOBRE NOSOTROS</SectionTitleFont>
            <h2>
                En INIBOT ofrecemos soluciones a medida de Desarrollo de Software.
                Adaptamos las últimas tendencias tecnológicas a las necesidades de 
                cada cliente materializando sus ideas.
                Estamos convencidos de que las mejores soluciones sólo se logran con
                un equipo de alta calidad humana y profesional.
            </h2>
        </AboutSection>
    );
}

export default HomeSectionAbout;