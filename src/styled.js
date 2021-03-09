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

const size = {
    mobileS: '320px',
    mobileM: '375px',
    mobileL: '425px',
    tablet: '768px',
    laptop: '1024px',
    laptopL: '1440px',
    desktop: '2560px'
  }

export const device = {
    mobileS: `(min-width: ${size.mobileS}) and (max-width: 374px)`,
    mobileM: `(min-width: ${size.mobileM}) and (max-width: 424px)`,
    mobileL: `(min-width: ${size.mobileL}) and (max-width: 767px)`,
    tablet: `(min-width: ${size.tablet}) and (max-width: 1023px)`,
    laptop: `(min-width: ${size.laptop}) and (max-width: 1439px)`,
    laptopL: `(min-width: ${size.laptopL}) and (max-width: 2559px)`,
    desktop: `(min-width: ${size.desktop})`
  };
