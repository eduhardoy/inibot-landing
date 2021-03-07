import React from 'react';
import styled from 'styled-components';

import { Color__celeste, Color__celesteClaro} from '../styled';
import banner from '../images/banner.png';

const HomeHero = styled.div`
    height:970px; 
    background: url(${banner}); // la img tiene 1080 de alto
    padding-top: 110px;

    h1{
        text-align: center;
        font-size:5em;
        font-weight: lighter;
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
                <div className="container">
                    <h1>DESARROLLO<br/> DE SOFTWARE</h1>
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