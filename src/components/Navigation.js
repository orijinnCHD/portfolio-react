import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (


        <div className="navigation">
            <ul>
                <NavLink 
                to="/" // quand dans url on sera à acceuil
                // on prend la class qui met l'effet texte bien noir
                className={(nav)=>(nav.isActive)?"nav-active hover":"hover"}>
                    <li>acceuil</li>
                </NavLink>


                <li className="nav-portfolio">
                    portfolio
                    <ul className="nav-projects" >
                        <NavLink 
                        to="/projet-1" // quand dans url on sera à acceuil
                        // on prend la class qui met l'effet texte bien noir
                        className={(nav)=>(nav.isActive)?"nav-active hover":"hover"}>
                            <li>projet1</li>
                        </NavLink>

                        <NavLink 
                        to="/projet-2" // quand dans url on sera à acceuil
                        // on prend la class qui met l'effet texte bien noir
                        className={(nav)=>(nav.isActive)?"nav-active hover":"hover"}>
                            <li>projet2</li>
                        </NavLink>

                        <NavLink 
                        to="/projet-3" // quand dans url on sera à acceuil
                        // on prend la class qui met l'effet texte bien noir
                        className={(nav)=>(nav.isActive)?"nav-active hover":"hover"}>
                            <li>projet3</li>
                        </NavLink>

                        <NavLink 
                        to="/projet-4" // quand dans url on sera à acceuil
                        // on prend la class qui met l'effet texte bien noir
                        className={(nav)=>(nav.isActive)?"nav-active hover":"hover"}>
                            <li>projet4</li>
                        </NavLink>

                    </ul>
                </li>


                <NavLink 
                to="/contact" // quand dans url il y aura contact
                // on prend la class qui met l'effet texte bien noir
                className={(nav)=>(nav.isActive)?"nav-active hover":"hover"}>
                    <li>contact</li>
                </NavLink>

            </ul>

           

            <ul>
                
            </ul>
        </div>


    );
};

export default Navigation;