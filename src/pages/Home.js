import React from 'react';
import DynamicText from '../components/DynamicText';
import Mouse from '../components/Mouse';
import Navigation from '../components/Navigation';
import SocialNetwork from '../components/SocialNetwork';
import Buttons from '../components/Buttons';
import TestHook from '../components/TestHook';
import {motion} from "framer-motion";

const Home = () => {

    // la variable qui paramatre l'animation de la page  home
    const variants ={
        initial:{
            opacity:0,
            transition:{duration:0.5},
            x:100,
        },
        visible:{
            opacity:1,
            x:0,
        },
        exit:{
            opacity:0,
            transition:{duration:0.3},
            x:-100

        }
    }


    return (
        <div>
            <Mouse/>
            <motion.div className="home" 
                initial="initial" 
                animate="visible" 
                exit="exit"
                variants={variants}
                >
                <Navigation/>
                <SocialNetwork/>
                <div className="home-main">
                    <div className="main-content">
                        <motion.h1 
                        drag 
                        onDragEnd 
                        dragConstraints={{
                            left:-250,
                            right:950,
                            top:-200,
                            bottom:250
                        }} >
                            FS AGENCY
                        </motion.h1>
                        <motion.h2
                        drag 
                        onDragEnd 
                        dragConstraints={{
                            left:-250,
                            right:950,
                            top:-200,
                            bottom:250
                        }}
                        >
                            <DynamicText/>
                        </motion.h2>
                        
                    </div>
                </div>
                {/* passe une props qui s'appelle right
                la page d'acceuil n'a pas de boutons left */}

                <TestHook />
                <Buttons right={"/project-1"}/>
                
            </motion.div>
            
        </div>
    );
};

export default Home;