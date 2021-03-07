import React from 'react';
import styled from 'styled-components';

import { Color__celeste, Color__celesteClaro} from '../styled';
import banner from '../images/banner.png';
import grua  from '../images/grua.png'; 


const HomeHero = styled.div`
    height:970px; 
    background: url(${banner}); // la img tiene 1080 de alto
    padding-top: 110px;

    .Hero__container{
        margin-top: 100px;
        display: flex;
        flex-direction: row;

        .Hero__container-title{
            width: 50%;
    
            h1{
                text-align: center;
                font-size:5em;
                font-weight: lighter;
            }
        }

        .Hero__container-img{
            width:50%;
            text-align: center;

            img{
                height: auto; //700px
                width: 100%;
            }
        }
    }
`;

const HomeSection = styled.section`
    height:400px;
    
`;

const HomeSectionTecno = styled(HomeSection)`
    background: ${Color__celeste};
`;

const HomeSectionAbout = styled(HomeSection)`
    /* background: orange; */
`;

const HomeSectionContact = styled(HomeSection)`
    /* background: red; */
`;

const HomeSectionClients= styled(HomeSection)`
    background: ${Color__celesteClaro};
`;

function Home(){

    return(
        <React.Fragment>
            <HomeHero>
                <div className="Hero__container">
                    <div className="Hero__container-title">
                        <h1>DESARROLLO<br/> DE SOFTWARE</h1>
                    </div>
                    <div className="Hero__container-img">
                        <img src={grua} alt="Grua"/>
                    </div>
                </div>
            </HomeHero>
            <HomeSectionTecno>
                
            </HomeSectionTecno>
            <HomeSectionAbout>
                
            </HomeSectionAbout>
            <HomeSectionContact>
                
            </HomeSectionContact>
            <HomeSectionClients>
                
            </HomeSectionClients>    
        </React.Fragment>    
        
    );
}

export default Home;