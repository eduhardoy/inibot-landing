import React from 'react';
import styled from 'styled-components';

import {device} from '../../styled';
import ContactForm from '../../components/home/ContactForm';

const ContactSection = styled.section`
    height:auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-top:2%;
    padding-bottom:2%;
`;

const ContactContainer = styled.div`
    margin: auto;
    display: flex; 
    width:80%;
    max-width: 1080px;

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

const ContactImgContainer = styled.div`
    height: 460px;
    width:50%;
    display: flex;
    justify-content: center;
    align-items: center;
    img{
        width: 70%;
        height: auto; 
    }
    @media ${device.mobileS}{
        height: auto;
                width:100%;
            
                img{
                    width: 50%;
                    
                }
    }
    @media ${device.mobileM}{
        height: auto;
        width:100%;
            
        img{
            width: 50%;    
        }
    } 
    @media ${device.mobileL}{
        height: auto;
        width:100%;    
        img{
            width: 50%;                    
        } 
    }
`;

const ContactFormContainer = styled.div`
    height: 460px;
    width:50%;
    display: flex;
    justify-content: center;
    align-items: center;
    @media ${device.mobileS}{
        height: auto;
        width:100%;
    }
    @media ${device.mobileM}{
        height: auto;
        width:100%;
    }
    @media ${device.mobileL}{
        height: auto;
        width:100%;
    }
`;

function HomeSectionContact(){

    return(
        <ContactSection>
            <ContactContainer>
                <ContactImgContainer>
                    <img src='./images/image.png' alt="Developer"/>
                </ContactImgContainer>
                <ContactFormContainer>
                    <ContactForm/>
                </ContactFormContainer>
            </ContactContainer>
        </ContactSection>
    );
}

export default HomeSectionContact;