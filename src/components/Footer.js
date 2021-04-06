import React from "react";
import styled from "styled-components";

import { device } from '../styled';
import {Color__azulOscuro} from "../styled";
import {FaInstagram, FaPhoneAlt, FaMapMarkerAlt, FaFacebookSquare} from "react-icons/fa";
import {IoMdMail, IoLogoWhatsapp} from "react-icons/io";


const FooterContainer = styled.footer`
  /*   height: 200px; */
    background-color: ${Color__azulOscuro};
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    color: white;
    font-family: 'Open Sans', sans-serif;

    @media ${device.mobileS}{
        flex-direction: column-reverse;
    }
    @media ${device.mobileM}{
        flex-direction: column-reverse;
    }
    @media ${device.mobileL}{
        flex-direction: column-reverse;
    }
`;

const ContactSection = styled.div`
    
    width: 40%;
    display: flex; 
    justify-content: center;
    align-items: center;
    ul{
        list-style-type: none;
        li{
            display: flex;
            flex-direction: row;
            margin: 15px 0;
            p{
                margin: 0;
                margin-left: 10px;
                
            }            
        }
    }
    @media ${device.mobileS}{
        width: 100%;
        ul{
            width:100%;
            display:flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            padding: 0;
            
            li{
                
                /* width: 70%; */
                display:flex;
                flex-wrap: wrap;
                p{
                    /* width: 80%; */
                }
            }
        }
    }
    @media ${device.mobileM}{
        width: 100%;
        ul{
            width:100%;
            display:flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            padding: 0;
            li{
                display:flex;
                flex-wrap: wrap;
               
            }
        }
    }
    @media ${device.mobileL}{
        width: 100%;
        ul{
            width:100%;
            display:flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            padding: 0;
            li{
                display:flex;
                flex-wrap: wrap;
               
            }
        }
    }
`;

const AboutSection = styled.div`
    width: 40%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const About = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    h4{
        margin: 0;
    }
    p{
        margin-top: 5px;
    }
    @media ${device.mobileS}{
        margin-top: 20px;
    }
    @media ${device.mobileM}{
        margin-top: 20px;
    }
    @media ${device.mobileL}{
        margin-top: 20px;
    }
`;

const Social = styled.div`
    display: flex;
    
    a{
        color: white;
        margin: 0 5px;
        font-size: 1.4em;
        
        :hover{
            transition: .08s;
            color: gray;
        }
    }
    @media ${device.mobileS}{
        a{
            margin: 0 15px;
        }
    }
    @media ${device.mobileM}{
        a{
            margin: 0 15px;
        }
    }
    @media ${device.mobileL}{
        a{
            margin: 0 15px;
        }
    }
`;

function Footer (){

    return(
        <FooterContainer id="contact">
            <ContactSection>
                <ul>
                    <li>
                        <FaMapMarkerAlt/><p>Moreno 1006, Corrientes, Argentina</p>
                    </li>
                    <li>
                        <FaPhoneAlt/><p>+54-3794289113</p>
                    </li>
                    <li>
                        <IoMdMail/><p>inibotnea@gmail.com</p>
                    </li>
                </ul>
            </ContactSection>
            <AboutSection>
                <About>
                    <h4>Inibot NEA</h4>
                    <p>Desarrollo Web y Software {/* Venta y alquiler de propiedades<br/> con recorrido 360° */}</p>
                </About>
                <Social>
                    <a href="https://www.facebook.com/">
                        <FaFacebookSquare/>
                    </a>
                    <a href="https://www.instagram.com/">
                        <FaInstagram/>
                    </a>
                    <a href="https://web.whatsapp.com/">
                        <IoLogoWhatsapp/>
                    </a>
                </Social>
            </AboutSection>
            {/* <FooterCredits>
                <p>Desarrollado por <a href="https://inibotnea.com/">inibiotnea.com©</a></p>
            </FooterCredits> */}
        </FooterContainer>
    );
}

export default Footer;