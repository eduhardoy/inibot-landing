import styled, {createGlobalStyle}  from 'styled-components';

//colores
export const Color__azulOscuro = '#001A46;'

export const Color__azul = '#084C94;'

export const Color__celeste = '#D1EBFF;'

export const Color__celesteClaro = '#F0F8FF;'

//GlobalStyle
export const GlobalStyle = createGlobalStyle `

    body{
        margin: 0;
        color: ${Color__azulOscuro};
        font-family: 'Fredoka One', cursive;
    }
`

/* Cargar una tipografía:
usando GlobalStyle:

export const GlobalStyle = createGlobalStyle`
	@font-face {
        font-family: myFont;
        src: url(${font});
    }
`; */



/* 
Ejemplo video edu

export const Cuadrado = styled.div`
    width: 70px;
    height: 70px;
    background-color: pink;
    

    :hover{
        background-color: red;
    }
`;

export const Rectangulo = styled(Cuadrado)`
    width: 200px;
`;

export const Component = styled.div`
    background-color: ${({isRight}) => isRight ? 'green' : 'red'};
`;

export const Input = styled.input.attrs(props => ({
    type: "password",
    maxLength: props.myMaxLength || 5,
    }))`
  color: blue;
`; */