import React from 'react';
import ContactForm from '../components/ContactForm';
import Logo from '../components/Logo';
import Mouse from '../components/Mouse';
import Navigation from '../components/Navigation';
import {motion} from "framer-motion";

//npm i react-copy-to-clipboard
// pour permettre de copier en un click 
import {CopyToClipboard} from "react-copy-to-clipboard";
import SocialNetwork from '../components/SocialNetwork';
import Buttons from '../components/Buttons';

const Contact = () => {

    const pageTransition = {
        in:{
            opacity:1,
            x:0,
        },
        out:{
            opacity:0,
            x:300,
        }

    }

    return (
       <main>
         <Mouse/>
         <motion.div 
         initial="out" 
         animate="in"   
         exit="out" 
         variants={pageTransition}  
         transition={{duration:0.5}}
         className="contact">
            <Navigation/>
            <Logo/>
            <ContactForm/>
            <div className="contact-infos">
                <div className="address">
                    <div className="content">
                        <h4>adresse</h4>
                        <p>12 rue Laplace</p>
                        <p>64200 Biarritz</p>
                    </div>
                </div>
                <div className="phone">
                    <div className="content">
                        <h4>téléphone</h4>
                        <CopyToClipboard text="0123456" className="hover">
                            <p 
                            style={{cursor:"pointer"}} 
                            className="clipboard" 
                            onClick={()=> alert("Téléphone copié !")}>
                                0123456
                            </p>
                        </CopyToClipboard>
                    </div>
                </div>
                <div className="email">
                    <div className="content">
                        <h4>email</h4>
                        <CopyToClipboard text="portforlio@gmail.com" className="hover">
                            <p 
                            style={{cursor:"pointer"}} 
                            className="clipboard" 
                            onClick={()=> alert("Email copié !")}>
                                portforlio@gmail.com
                            </p>
                        </CopyToClipboard>
                    </div>
                </div>
                <SocialNetwork/>
                <div className="credits">
                    <p>orijinn - 2022</p>
                </div>
            </div>
            <Buttons left={"/project-4"}/>
         </motion.div>
       </main>
    );
};

export default Contact;