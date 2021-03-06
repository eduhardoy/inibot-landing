import React from 'react';
import styled from 'styled-components';
import {Cuadrado, Rectangulo, Component, Input} from '../styled';

function Home(){

    return(
        <div>
            <StyledDiv>
               <Cuadrado className="cuadrado"/>
               <Rectangulo/>
               <Component isRight={true}>dddddddddddd</Component>
               <Input myMaxLenght={20}/>
            </StyledDiv>
            <h1>home</h1>
            
        </div>
    );
}

export default Home;