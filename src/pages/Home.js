import React from 'react';

import HomeHero from '../components/home/HomeHero';
import HomeSectionAbout from '../components/home/HomeSectionAbout';
import HomeSectionClients from '../components/home/HomeSectionClients';
import HomeSectionContact from '../components/home/HomeSectionContact';
import HomeSectionTecno from '../components/home/HomeSectionTecno';

function Home(){

    return(
        <React.Fragment>
            <HomeHero/>
            <HomeSectionTecno/>
            <HomeSectionAbout/>
            <HomeSectionContact/>
            <br/><br/>
            <HomeSectionClients/>    
        </React.Fragment>    
        
    );
}

export default Home;