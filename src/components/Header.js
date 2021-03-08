import React from 'react';
import styled from 'styled-components';

import {Color__azulOscuro} from '../styled';
import logo from '../images/paglogo.png';

const HeaderContainer = styled.div`
    position: absolute;
    height: 120px;
    width: 100%;
    /* background: yellow; */
    display: flex;
    justify-content: center;
    
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
                height: 30px;
                width: 160px;   
                border: 5px solid ${Color__azulOscuro};
                font-size: 1.2em;
                color: ${Color__azulOscuro};
                border-radius: 6px;
                text-align: center;
                text-decoration: none;
                line-height: 30px;
                                
                :hover{
                    color: white;
                    background: ${Color__azulOscuro};
                }
            }
        }
    }
`;

function Header (){

    return(
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
    );
}

export default Header;