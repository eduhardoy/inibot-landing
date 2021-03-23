import React from 'react';
import styled from 'styled-components';

import {Color__azulOscuro} from '../../styled';

const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    height:90%;
    width:80%;
    h2{
        text-align:center;
        font-weight: lighter;
    }

    input{
        margin-bottom: 10px;
        height: 5%;
        width: 80%;
        border: solid 2px ${Color__azulOscuro};
        padding: 10px;
        font-size: 18px; 
        margin-top: 10px;     

    }

    textarea{
        resize: none;
        border: solid 2px ${Color__azulOscuro};
        height: 40%;
        width: 80%;
        padding: 10px;
        font-size: 18px; 
             
    }

    button{
        border: solid 2px ${Color__azulOscuro};
        background-color: white;
        font-weight: bold;
        height: 40px;
        width:100px;
        margin-top: 10px;

        :hover{
            color: white;
            background: ${Color__azulOscuro};
        }
    } 
`;

function ContactForm(){
    return(
        <React.Fragment>
            <Form>
                    <h2>ENVIANOS TU MENSAJE</h2>
                    <input className="Input-nombre" type="text" placeholder="Nombre"/>
                    <input className="Input-email" type="email" placeholder="Email"/>
                    <textarea className="Input-msj"/>
                    <button>ENVIAR</button>
            </Form>
        </React.Fragment>
    );
}

export default ContactForm;