import React,{useEffect, useState} from 'react';
import {projectsData} from "../data/projectsData";
import{motion} from "framer-motion";

const Project = ({projectNumber}) => {

    //pk pas de "setCurrentProject" parce que on recup que la data à initialisation
    //on ne set plus du tout
    const [currentProject] = useState(projectsData[projectNumber]);
    const [left,setLeft] = useState();
    const [top,setTop] = useState();
    const [size,setSize] = useState();
   

    useEffect(()=>{

        setLeft(Math.floor(Math.random()*200 + 700)+ "px");
        setTop(Math.floor(Math.random()*200 + 150)+ "px");
        setSize("scale("+(Math.random()+0.70)+")" );

        //si c'est sup à 0.4 un chiffre positive et l'inverse negative
        
    },[])

    ////////////////animation

    const variants ={
        initial:{
            opacity:0,
            transition:{duration:0.5},
            x:200
        },
        visible:{
            opacity:1,
            x:0
        },
        exit:{
            opacity:0.4,
            transition:{duration:0.35},
            x:-800,
        }
    }



    // test des valeur pour des ease
    //https://cubic-bezier.com/#.17,.67,.83,.67
    const transition ={
        ease:[0.03,0.87,0.73,0.9],
        duration:0.6,
    }

    const imgAnim ={
        initial:{
            opacity:0,
            x:Math.floor(Math.random()*350 * (Math.random()>0.4 ? 1: -1)),
            y:Math.floor(Math.random()*120 * (Math.random()>0.4 ? 1 : -1)),
            
        },
        visible:{
            opacity:1,
            x:0,
            y:0,
        }
        

    }

    console.log(imgAnim);
    return (
        <motion.div 
        className="project-main" initial="initial" animate="visible" exit="exit" transition={transition} variants={variants}>
            <div className="project-content">
                <h1>{currentProject.title}</h1>
                <p>{currentProject.date}</p>
                <ul className="languages">
                    {currentProject.languages
                    .map((item)=>(
                        <li key={item}> {item} </li>
                    ))}
                </ul>
            </div>
            <motion.div 
            className="img-content" 
            initial="initial" 
            animate="visible" 
            variants={imgAnim} 
            transition={{duration:1.2}}>
                <div className="img-container hover">
                        <span>
                            <h3>{currentProject.title}</h3>
                            <p>{currentProject.infos}</p>
                        </span>
                        <img src={currentProject.img} alt={currentProject.title} className="img" />
                </div>
                <div className="button-container">
                    <a href={currentProject.link} 
                    target="_blank" 
                    rel="noopener noreferrer" className="hover">

                        <span className="button">Voir le site</span>
                    </a>
                </div>
            </motion.div>
            <span className="random-circle" style={{left:left,top:top,transform:size}}></span>
        </motion.div>
    );
};

export default Project;