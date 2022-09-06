import React from 'react';
import DynamicText from '../components/DynamicText';
import Mouse from '../components/Mouse';
import Navigation from '../components/Navigation';
import SocialNetwork from '../components/SocialNetwork';
import Buttons from '../components/Buttons';
import TestHook from '../components/TestHook';

const Home = () => {
    return (
        <div>
            <Mouse/>
            <div className="home">
                <Navigation/>
                <SocialNetwork/>
                <div className="home-main">
                    <div className="main-content">
                        <h1>FS AGENCY</h1>
                        <h2>
                            <DynamicText/>
                        </h2>
                        
                    </div>
                </div>
                {/* passe une props qui s'appelle right
                la page d'acceuil n'a pas de boutons left */}

                <TestHook />
                <Buttons right={"/project-1"}/>
                
            </div>
            
        </div>
    );
};

export default Home;