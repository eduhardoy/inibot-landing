import React from 'react';
import styled from 'styled-components';

import {Color__azulOscuro, device} from '../styled';
import logo from '../images/paglogo.png';

const HeaderBlock = styled.header`

    position: absolute;
    width: 100%;
    justify-content: center;
    display:flex;
`

const HeaderContainer = styled.div`
    width: 100%;
    display: flex;
    max-width:1920px;
    margin-top: 20px;
    
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
        width:50%;
        margin-left: 100px;
        display: flex;
        justify-content: center;
        
        img{
            width: 50%;
            height: auto;
        }
    }

    @media ${device.mobileS}{
        width: 60%;
        margin: auto;
        div{
            width:60%;
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
            width:60%;
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
            width:60%;
            margin: auto;
            img{
                width: 100%;
                height: auto;
            }
        }
    }

`;

const HeaderMenu = styled.div`
    width: 50%;
    display: flex;
    justify-content: center;
    
`;

const MenuNav = styled.nav`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 80%;
    height: 100%;
    
    ul{
        width: 100%; 
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: row;
        list-style-type: none;
        padding: 0;

        li{
                margin: 0 2%;
            a{
                display: block;
                height: 2.2vw;
                width: 9vw;
                border: .4vw solid ${Color__azulOscuro};
                font-size: 1vw;
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
                                <a href="#about">CONTACTO</a>
                            </li>
                        </ul>
                    </MenuNav>
                </HeaderMenu>
            </HeaderContainer>
        </HeaderBlock>
    );
}

export default Header;