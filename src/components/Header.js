import React from 'react';
import styled from 'styled-components';

import {Color__azulOscuro, device} from '../styled';
import logo from '../images/paglogo.png';

const HeaderBlock = styled.header`
    position: absolute;
    
    height: 120px;
    width: 100%;
`

const HeaderContainer = styled.div`
    
    /* position: absolute; */
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    max-width:1920px;
    margin: auto;
    
    
    @media ${device.mobileS}{
        flex-direction: column;
    }
    @media ${device.mobileM}{
        flex-direction: column;
    }
    @media ${device.mobileL}{
        flex-direction: column;
    }
    @media ${device.desktop}{
    
    
       
    }
`; 

const HeaderLogo = styled.div`
    
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    /* background: lightblue; */
    
    div{
        height: 70px;
        width:40%;
        margin-left: 100px;
        /* margin-left: 120px; */
        /* background: pink; */
        
        img{
            width: auto;
            height: 70px;
        }
    }

    @media ${device.mobileS}{
        width: 80%;
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
        width: 80%;
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
        width: 80%;
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
        width: 40%;
        div{
            width:60%;
            margin: auto;
            /* margin-right: 120px; */
            img{
                width: 90%;
                height: auto;
                /* display: block; */
                margin: 10px;
                margin-top: 13px;
                
            }
        }
    }
`;

const HeaderMenu = styled.div`
    
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: flex-end;

    ul{
        height:70px;
        width: 700px;
        /* background: red; */
        display: flex;
        align-items: center;
        justify-content: space-around;
        flex-direction: row;
        list-style-type: none;
        padding: 0;
        margin-right: 100px;

        li{
            
            a{
                display: block;
                height: 40px;
                width: 160px;   
                border: 5px solid ${Color__azulOscuro};
                font-size: 1.2em;
                color: ${Color__azulOscuro};
                transition: background-color .2s;
                transition: color .2s;
                border-radius: 6px;
                text-align: center;
                text-decoration: none;
                line-height: 40px;
                                
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
        width:60%;
        margin-right: 20px;
        ul{
            width:100%;
            margin: auto;
            
            li{

                a{
                    width: 120px;
                    height: 30px;
                    font-size: 1em;
                    line-height: 30px;
                }
            }
        }
    }

    @media ${device.laptop}{
        ul{
            margin-right: 30px;
            li{
                margin-right: 10px;
                a{
                    /* width: 150px; */
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
                    <ul>
                        <li>
                            <a href="/">NOSOTROS</a>
                        </li>
                        <li>
                            <a href="/">TECNOLOGIAS</a>
                        </li>
                        <li>
                            <a href="/">CONTACTO</a>
                        </li>
                    </ul>
                </HeaderMenu>
            </HeaderContainer>
        </HeaderBlock>
    );
}

export default Header;