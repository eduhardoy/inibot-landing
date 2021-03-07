import React from 'react';
import styled from 'styled-components';
/* import {Cuadrado, Rectangulo, Component, Input} from '../styled'; */
/* import Header from '../components/Header'; */

const Cuadrado = styled.div`
    width: 70px;
    height: 70px;
    background-color: pink;
    

    :hover{
        background-color: yellow;
    }
`;

const Rectangulo = styled(Cuadrado)`
    width: 200px;
`;

const Component = styled.div`
    background-color: ${({isRight}) => isRight ? 'green' : 'red'};
`;

const Input = styled.input.attrs(props => ({
    type: "password",
    maxLength: props.myMaxLength || 5,
    }))`
  color: blue;
`;

const H1i = styled.div`
    color: orange;
`;

function Home(){

    return(
        <div>
                {/* <Header/> */}
                <Cuadrado className="cuadrado"/>
                <Rectangulo/>
                <Component isRight={false}>dddddddddddd</Component>
                <Input myMaxLenght={20}/>
            <H1i>
                <h1>Home</h1>
                </H1i>
            <h1i>homee</h1i>
            
        </div>
    );
}

export default Home;