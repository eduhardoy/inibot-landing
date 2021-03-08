import React from 'react';
import styled from 'styled-components';

import { Color__celeste, Color__celesteClaro} from '../styled';
import banner from '../images/banner.png';
import grua from '../images/grua.png';
import html from '../images/html.png';
import react from '../images/react.png';
import vue from '../images/vue.png';
import nest from '../images/nest.png';
import arangodb from '../images/arangodb.png';
import mysql from '../images/mysql.png';
import next from '../images/next.png';
import gatsby from '../images/gatsby.png';
import image from '../images/image.png';
import fran from '../images/fran.png';
import neoyoga from '../images/neoyoga.png';
import tucancha from '../images/tucancha.jpg';


const HomeHero = styled.div`
    height:970px; 
    background: url(${banner}); // la img tiene 1080 de alto
    padding-top: 110px;

    .Hero__container{
        margin-top: 100px;
        display: flex;
        flex-direction: row;

        .Hero__container-title{
            width: 50%;
    
            h1{
                text-align: center;
                font-size:5em;
                font-weight: lighter;
            }
        }

        .Hero__container-img{
            width:50%;
            text-align: center;

            img{
                height: auto; //700px
                width: 100%;
            }
        }
    }
`;

const SectionTitleFont = styled.p` //titulo de cada seccion
    font-size: 2.7em;
    font-weight: lighter;
    text-align: center;
`;

const HomeSection = styled.section`
    height:450px;
    
`;

const HomeSectionTecno = styled(HomeSection)`
    background: ${Color__celeste};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    div{

        ul{
            list-style-type: none;
            display: flex;
            justify-content: center;
            flex-wrap: wrap;
            align-items: center;
            width: 100%;
            padding: 0;

            li{
                display: flex;
                align-items: center;
                justify-content: center;
                margin-right: 2.5%;
                margin-left: 2.5%;
                height: 100px;
                width: 150px;
                margin-bottom: 3%;
                img{
                    height: auto;
                    max-height: 100%;
                    width: auto;
                    max-width: 130px;
                }
            }
        }
    }
`;

const HomeSectionAbout = styled(HomeSection)`
    /* background: orange; */
    height:320px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    h2{
        max-width: 1200px;
        text-align:center;
        font-weight: lighter;
    }

`;

const HomeSectionContact = styled(HomeSection)`
    height: 500px;

    .Contact__container{
        margin: auto;
        display: flex; 
        width:80%;
        
        .Contact__container-img{
            /* background: blue; */
            height: 460px;
            width:50%;
            display: flex;
            justify-content: center;
            align-items: center;
                img{
                   width: auto;
                    height: 80%; 
                } 
            }
        }

        .Contact__container-form{
            height: 460px;
            width:50%;
            display: flex;
            justify-content: center;
            align-items: center;
        }
    }
`;

const HomeSectionClients= styled(HomeSection)`
    background: ${Color__celesteClaro};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    div{
        width: 100%;
        ul{
            list-style-type: none;
            display: flex;
            justify-content: center;
            flex-wrap: wrap;
            align-items: center;
            width: 100%;
            padding: 0;

            li{
                display: flex;
                align-items: center;
                justify-content: center;
                margin-right: 2.5%;
                margin-left: 2.5%;
                height: auto;
                width: 200px;
                margin-bottom: 3%;
                border-radius: 50%;
                img{
                    height: auto;
                    max-height: 100%;
                    width: auto;
                    max-width: 200px;
                    border-radius: 50%;
                }
            }
        }
    }    
`;

function Home(){

    return(
        <React.Fragment>
            <HomeHero>
                <div className="Hero__container">
                    <div className="Hero__container-title">
                        <h1>DESARROLLO<br/> DE SOFTWARE</h1>
                    </div>
                    <div className="Hero__container-img">
                        <img src={grua} alt="Grua"/>
                    </div>
                </div>
            </HomeHero>
            <HomeSectionTecno>
                <div>
                    <SectionTitleFont>TECNOLOGIAS</SectionTitleFont>
                    <ul>
                        <li><img src={html} alt="Logo de HTML"/></li>
                        <li><img src={react} alt="Logo de React"/></li>
                        <li><img src={vue} alt="Logo de Vue"/></li>
                        <li><img src={nest} alt="Logo de Nest"/></li>
                        <li><img src={arangodb} alt="Logo de ArangoDB"/></li>
                        <li><img src={mysql} alt="Logo de MySQL"/></li>
                        <li><img src={next} alt="Logo de Next"/></li>
                        <li><img src={gatsby} alt="Logo de Gatsby"/></li>
                    </ul>
                </div>
            </HomeSectionTecno>
            <HomeSectionAbout>
                <SectionTitleFont>SOBRE NOSOTROS</SectionTitleFont>
                <h2>
                    En INIBOT ofrecemos soluciones a medida de Desarrollo de Software.
                    Adaptamos las últimas tendencias tecnológicas a las necesidades de 
                    cada cliente materializando sus ideas.
                    Estamos convencidos de que las mejores soluciones sólo se logran con
                    un equipo de alta calidad humana y profesional.
                </h2>
            </HomeSectionAbout>
            <HomeSectionContact>
                <div className="Contact__container">
                    <div className="Contact__container-img">
                        <img src={image} alt="Developer"/>
                    </div>
                    <div className="Contact__container-form">
                        Formulario
                    </div>
                </div>
            </HomeSectionContact>
            <HomeSectionClients>
                <div>
                    <SectionTitleFont>CLIENTES</SectionTitleFont>
                    <ul>
                        <li><img src={fran} alt="Logo de Varvlab"/></li>
                        <li><img src={neoyoga} alt="Logo de TuCancha"/></li>
                        <li><img src={tucancha} alt="Logo de Neo Yoga"/></li>
                    </ul>
                </div>
            </HomeSectionClients>    
        </React.Fragment>    
        
    );
}

export default Home;