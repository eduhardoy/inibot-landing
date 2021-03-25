import React from 'react';
import styled from 'styled-components';

import {device} from '../../styled';
import {Color__celesteClaro} from '../../styled';

const ClientsSection = styled.section`
    height:auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-top:2%;
    padding-bottom:2%;
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

function HomeSectionClients(){

    return(
        <ClientsSection>
            <div>
            <SectionTitleFont>CLIENTES</SectionTitleFont>
            <ul>
                <li>
                    <a href="https://varvlab.com/" target="__blank">
                        <img src='./images/fran.png' alt="Logo de Varvlab"/>
                    </a>
                </li>
                <li>
                    <a href="https://varvlab.com/" target="__blank">
                        <img src='./images/neoyoga.png' alt="Logo de Neo Yoga"/>
                    </a>
                </li>
                <li>
                    <a href="https://varvlab.com/" target="__blank">
                        <img src='./images/tucancha.jpg' alt="Logo de TuCancha"/>
                    </a>
                </li>
            </ul>
            </div>
        </ClientsSection>
    );
}

export default HomeSectionClients;