import React from 'react';
import styled from 'styled-components';

import {Color__azulOscuro, device} from '../styled';
import logo from '../images/paglogo.png';

const HeaderBlock = styled.header`

    position: absolute;
    /* height: 120px; */
    width: 100%;
    justify-content: center;
    display:flex;
`

const HeaderContainer = styled.div`
    
    /* height: 100%; */ 
    width: 100%;
    display: flex;
    max-width:1920px;
    /* justify-content: center; */
    
    /* margin: auto; */
    
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
    /* background: orange; */
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    background: yellow;
    
    div{
        /* height: 70px; */
        width:50%;
        margin-left: 100px;
        background: red;
        display: flex;
        justify-content: center;
        
        img{
            width: 50%;
            height: auto;
            background: blue;
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

    @media ${device.tablet}{
        width: 30%;
        div{
            width:60%;
            margin: auto;
        
            img{
                width: 90%;
                height: auto;
                margin: 10px;
                margin-top: 16px;
                
            }
        }
    }
`;

const HeaderMenu = styled.div`
    width: 50%;
    display: flex;
    justify-content: center;
    background: pink;
    
`;

const MenuNav = styled.nav`
    
    /* width: 100%; */
    display: flex;
    align-items: center;
    justify-content: center;
    background: green;
    width: 80%;
    
    ul{
        /* height:70px; */
        /* height: 70%;*/
        width: 100%; 
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: row;
        list-style-type: none;
        padding: 0;
        /* margin-right: 100px; */
        background: orange;

        li{
                /* height: 100%;
                width: 160px; */
                /* padding: auto; */
                margin: 0 2%;
            a{
                /* display: block; */
                height: 2.2vw;
                width: 9vw;
                border: 7px solid ${Color__azulOscuro};
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

    @media ${device.tablet}{
        width:100%;
        
        ul{
            width:100%;
            margin: auto;
            
            li{

                a{
                    width: 100px;
                    height: 30px;
                    font-size: .8em;
                    line-height: 30px;
                }
            }
        }
    }

    @media ${device.laptop}{
        ul{
            
            li{
                
                a{
                    
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