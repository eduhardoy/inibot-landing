import React from 'react';
import styled from 'styled-components';

import ContactForm from '../components/ContactForm';

import { device } from '../styled';
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
    
    /* height:970px;  */
    background: url(${banner}); 
    background-size: cover;
    background-repeat: no-repeat;
    padding-top: 120px;
    height: 100vh;
   
    
    .Hero__container{
        margin-top: 100px;
        display: flex;
        flex-direction: row;

        .Hero__container-title{
            width: 50%;
    
            h1{
                margin-top: 13%;
                text-align: center;
                font-size:5vw;
                font-weight: lighter;
            }
        }

        .Hero__container-img{
            width:50%;
            text-align: center;

            img{
                height: auto; 
                width: 88%;
                margin-bottom:50px;
            }
        }
    }

    @media ${device.mobileS}{
        padding-top: 10px;
        .Hero__container{
            flex-direction: column;

            .Hero__container-title{
                width: 100%;
                h1{
                    margin-top: 0;
                    font-size: 10vw;
                }
            }

            .Hero__container-img{
                width:100%;
                text-align: center;
            
                img{
                    height: auto; 
                    width: 85%;
                    margin-bottom:20px;
                }
            }    
        }
        
    }

    @media ${device.mobileM}{
        padding-top: 10px;
        .Hero__container{
            flex-direction: column;

            .Hero__container-title{
                width: 100%;
                h1{
                    margin-top: 0;
                    font-size: 10vw;
                }
            }

            .Hero__container-img{
                width:100%;
                text-align: center;
            
                img{
                    height: auto; 
                    width: 85%;
                    margin-bottom:20px;
                }
            }    
        }
    }

    @media ${device.mobileL}{
        padding-top: 10px;
        .Hero__container{
            flex-direction: column;

            .Hero__container-title{
                width: 100%;
                h1{
                    margin-top: 0;
                    font-size: 10vw;
                }
            }

            .Hero__container-img{
                width:100%;
                text-align: center;
            
                img{
                    height: auto; 
                    width: 70%;
                    margin-bottom:20px;
                }
            }    
        }
    }

    @media ${device.laptop}{
        .Hero__container{
            margin-top: 1vh;
        }
    }
   
    
`;

const SectionTitleFont = styled.p` //titulo de cada seccion
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

const HomeSection = styled.section` //preset para cada seccion
    height:auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-top:2%;
    padding-bottom:2%;
`;

const HomeSectionTecno = styled(HomeSection)`
    background: ${Color__celeste};

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

    @media ${device.mobileS}{
        
        height: auto;
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
                    margin-right: 1%;
                    margin-left: 1%;
                    height: 60px;
                    width: 110px;
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

    }
    @media ${device.mobileM}{
        height: auto;
    }   
    @media ${device.mobileL}{
        height: auto;
    }
`;

const HomeSectionAbout = styled(HomeSection)`

    height:auto;
    margin-top:10px;
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

const HomeSectionContact = styled(HomeSection)`
    
    .Contact__container{
        margin: auto;
        display: flex; 
        width:80%;
        max-width: 1080px;
        
        .Contact__container-img{
            /* background: blue; */
            height: 460px;
            width:50%;
            display: flex;
            justify-content: center;
            align-items: center;
            img{
                width: 80%;
                height: auto; 
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

    @media ${device.mobileS}{
        .Contact__container{
            flex-direction: column;

            .Contact__container-img{
                height: auto;
                width:100%;
            
                img{
                    width: 50%;
                    
                } 
            }
            
            .Contact__container-form{
                height: auto;
                width:100%;
                
            }
        }
    }
    @media ${device.mobileM}{
        .Contact__container{
            flex-direction: column;

            .Contact__container-img{
                height: auto;
                width:100%;
            
                img{
                    width: 50%;
                    
                } 
            }
            
            .Contact__container-form{
                height: auto;
                width:100%;
                
            }
        }
    }
    @media ${device.mobileL}{
        .Contact__container{
            flex-direction: column;

            .Contact__container-img{
                height: auto;
                width:100%;
            
                img{
                    width: 50%;
                    
                } 
            }
            
            .Contact__container-form{
                height: auto;
                width:100%;
                
            }
        }
    }

`;

const HomeSectionClients= styled(HomeSection)`
    background: ${Color__celesteClaro};
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
            margin-bottom: 3%;

            li{
                display: flex;
                align-items: center;
                justify-content: center;
                margin-right: 4%;
                margin-left: 4%;
                height: auto;
                width: 10%;
                
                a{
                    border-radius: 50%;
                   img{
                        height: auto;
                        max-height: 100%;
                        width: 100%;
                        /* max-width: 200px; */
                        border-radius: inherit;
                    } 
                } 
            }
        }
    }

    @media ${device.mobileS}{
        div{
        
        ul{
            
            li{
                width: 35%;
                
            }
        }
    }
    } 
    @media ${device.mobileM}{
        div{
        
        ul{
            
            li{
                width: 35%;
                
            }
        }
    }
    } 
    @media ${device.mobileL}{
        div{
        
        ul{
            
            li{
                width: 35%;
                
            }
        }
    }
    } 
    @media ${device.tablet}{
        div{
        
        ul{
            
            li{
                width: 15%;
                
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
                    <SectionTitleFont id="tecno">TECNOLOGIAS</SectionTitleFont>
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
            <HomeSectionAbout id="about">
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
                <div className="Contact__container" id="contact">
                    <div className="Contact__container-img">
                        <img src={image} alt="Developer"/>
                    </div>
                    <div className="Contact__container-form">
                        <ContactForm/>
                    </div>
                </div>
            </HomeSectionContact>
            <br/><br/>
            <HomeSectionClients>
                <div>
                    <SectionTitleFont>CLIENTES</SectionTitleFont>
                    <ul>
                        <li>
                            <a href="https://varvlab.com/" target="__blank">
                                <img src={fran} alt="Logo de Varvlab"/>
                            </a>
                        </li>
                        <li>
                            <a href="https://varvlab.com/" target="__blank">
                                <img src={neoyoga} alt="Logo de TuCancha"/>
                            </a>
                        </li>
                        <li>
                            <a href="https://varvlab.com/" target="__blank">
                                <img src={tucancha} alt="Logo de Neo Yoga"/>
                            </a>
                        </li>
                    </ul>
                </div>
            </HomeSectionClients>    
        </React.Fragment>    
        
    );
}

export default Home;