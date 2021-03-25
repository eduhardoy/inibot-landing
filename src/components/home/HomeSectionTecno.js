import React from 'react';
import styled from 'styled-components';

import {device} from '../../styled';
import { Color__celeste} from '../../styled';

const TecnoSection = styled.section`
    height:auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-top:2%;
    padding-bottom:2%;
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

function HomeSectionTecno(){

    return(
        <TecnoSection>
            <div>
                    <SectionTitleFont id="tecno">TECNOLOGIAS</SectionTitleFont>
                    <ul>
                        <li><img src='./images/html.png' alt="Logo de HTML"/></li>
                        <li><img src='./images/react.png' alt="Logo de React"/></li>
                        <li><img src='./images/vue.png' alt="Logo de Vue"/></li>
                        <li><img src='./images/nest.png' alt="Logo de Nest"/></li>
                        <li><img src='./images/arangodb.png' alt="Logo de ArangoDB"/></li>
                        <li><img src='./images/mysql.png' alt="Logo de MySQL"/></li>
                        <li><img src='./images/next.png' alt="Logo de Next"/></li>
                        <li><img src='./images/gatsby.png' alt="Logo de Gatsby"/></li>
                    </ul>
                </div>
        </TecnoSection>
    );
}

export default HomeSectionTecno;