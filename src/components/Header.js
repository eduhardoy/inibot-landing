import React from 'react';
import styled from 'styled-components';

import {Color__azulOscuro, device} from '../styled';
import logo from '../images/logo4.png';

const HeaderBlock = styled.header`
    position: absolute;
    width: 100%;
    justify-content: center;
    display:flex;
`;

const HeaderContainer = styled.div`
    width: 100%;
    display: flex;
    max-width:1920px;
    margin-top: 20px;
    height: 75px;
    /* background-color: red; */
    
    @media ${device.mobileS}{
        flex-direction: column;
    }
    @media ${device.mobileM}{
        flex-direction: column;
    }
    @media ${device.mobileL}{
        flex-direction: column;
    }
   
`; 

const HeaderLogo = styled.div`
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    
    div{
        height:60px;
        margin-left: 100px;
        display: flex;
        justify-content: center;
        
        img{
            width: auto;
            height: 100%;
        }
    }

    @media ${device.mobileS}{
        width: 60%;
        margin: auto;
        div{
            height: auto;
            width:50%;
            margin: auto;
            img{
                width: 100%;
                height: auto;
            }
        }
    }

    @media ${device.mobileM}{
        width: 60%;
        margin: auto;
        div{
            height: auto;
            width:50%;
            margin: auto;
            img{
                width: 100%;
                height: auto;
            }
        }
    }

    @media ${device.mobileL}{
        width: 60%;
        margin: auto;
        div{
            height: auto;
            width:50%;
            margin: auto;
            img{
                width: 100%;
                height: auto;
            }
        }
    }
    @media ${device.tablet}{
        width: 50%;
        display: flex;
        align-items: center;
        justify-content: flex-start;
    
    div{
        height:50px;
        margin-left: 50px;
        display: flex;
        justify-content: center;
        
        img{
            width: auto;
            height: 100%;
        }
    }
    }

`;

const HeaderMenu = styled.div`
    width: 50%;
    display: flex;
    justify-content: flex-end;
    
`;

const MenuNav = styled.nav`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    margin-right: 100px;
    
    ul{
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: row;
        list-style-type: none;
        padding: 0;        

        li{
                margin: 0 15px;
            a{
                display: block;
                height: 35px;
                width: 130px;
                border: 6px solid ${Color__azulOscuro};
                color: ${Color__azulOscuro};
                transition: background-color .2s;
                transition: color .2s;
                border-radius: 10px;
                text-decoration: none;
                display: flex;
                align-items: center;
                justify-content: center;
                                
                :hover{
                    color: white;
                    background: ${Color__azulOscuro};
                }
            }
        }
    }

    @media ${device.mobileS}{
        display: none;
    }
    @media ${device.mobileM}{
        display: none;
    }
    @media ${device.mobileL}{
        display: none;
    }

    @media ${device.tablet}{
        margin-right: 20px;
        ul{
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: row;
        list-style-type: none;
        padding: 0;        

        li{
                margin: 0 10px;
            a{
                display: block;
                height: 25px;
                width: 100px;
                font-size: .75em;
                border: 4px solid ${Color__azulOscuro};
                color: ${Color__azulOscuro};
                transition: background-color .2s;
                transition: color .2s;
                border-radius: 10px;
                text-decoration: none;
                display: flex;
                align-items: center;
                justify-content: center;
            }
        }
    }
    }
    
    @media ${device.desktop}{
        ul{
            
            li{
                
                a{
                    height: 2vw;
                    width: 8vw;
                }
            }
        }
    }

`;

function Header (){

    return(
        <HeaderBlock>
            <HeaderContainer>
                <HeaderLogo>
                    <div>
                        <img src={logo} alt="Logo de Inibot"/>
                    </div>
                </HeaderLogo>
                <HeaderMenu>
                    <MenuNav>
                        <ul>
                            <li>
                                <a href="#about">NOSOTROS</a>
                            </li>
                            <li>
                                <a href="#tecno">TECNOLOGIAS</a>
                            </li>
                            <li>
                                <a href="#contact">CONTACTO</a>
                            </li>
                        </ul>
                    </MenuNav>
                </HeaderMenu>
            </HeaderContainer>
        </HeaderBlock>
    );
}

export default Header;