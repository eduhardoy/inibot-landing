import React from 'react';
import styled from 'styled-components';

import {device} from '../../styled';

const Hero = styled.div`
    background: url('./images/banner.png'); 
    background-size: cover;
    background-repeat: no-repeat;
    height: 100vh;
    display: flex;
    justify-content: center;
`;

const HeroContainer = styled.div`
    display: flex;
    flex-direction: row;
    max-width: 1920px;
    width:100%;
    @media ${device.mobileS}{
        flex-direction: column;
    }
    @media ${device.mobileM}{
        flex-direction: column;
    }
    @media ${device.mobileL}{
        flex-direction: column;
    }
    @media ${device.laptop}{
        margin-top: 1vh;
    }
`;

const HeroContainerTitle = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    h1{
        margin-bottom: 10%;
        text-align: center;
        font-size:5vw;
        font-weight: lighter;
    }

    @media ${device.mobileS}{
        margin-top: 40%;                
        height:100px;
        width: 100%;
        h1{
            margin-top: 0;
            margin-bottom: 0;
            font-size: 8vw;
        }
    }

    @media ${device.mobileM}{
        margin-top: 55%;                
        height:100px;
        width: 100%;
        h1{
            margin-top: 0;
            margin-bottom: 0;
            font-size: 8vw;
        }
    }

    @media ${device.mobileL}{
        margin-top: 25%;                
        height:100px;
        width: 100%;
        h1{
            margin-top: 0;
            margin-bottom: 0;
            font-size: 8vw;
        }
    }
`;

const HeroContainerImg = styled.div`
    width:50%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 4%;

    div{
        height: 90%;
        width: 90%;
        display:flex;
        justify-content: center;
        align-items: center;
        
        img{
            height: auto; 
            width: 100%;
        }
    }

    @media ${device.mobileS}{
        margin-top:20%;
                height:200px;
                width:100%;
                text-align: center;
                div{
                    img{
                        height: auto; 
                        width: 80%;
                        margin-top: 0;
                    
                    }
                }
    }

    @media ${device.mobileM}{
        margin-top:25%;
                height:200px;
                width:100%;
                text-align: center;
                div{
                    img{
                        height: auto; 
                        width: 80%;
                        margin-top: 0;
                    
                    }
                }
    }

    @media ${device.mobileL}{
        margin-top:15%;
                height:200px;
                width:100%;
                text-align: center;
                
                div{
                    img{
                        height: auto; 
                        width: 80%;
                        margin-top: 0;
                    
                    }
                }
    }
`;

function HomeHero (){

    return(
        <Hero>
            <HeroContainer>
                <HeroContainerTitle>
                    <h1>DESARROLLO<br/> DE SOFTWARE</h1>  
                </HeroContainerTitle>
                <HeroContainerImg>
                    <div>
                        <img src='./images/grua.png' alt="Grua"/>
                    </div>
                </HeroContainerImg>
            </HeroContainer>
        </Hero>
        
    );
}

export default HomeHero;