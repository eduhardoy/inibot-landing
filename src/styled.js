import styled from 'styled-components';

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
`;