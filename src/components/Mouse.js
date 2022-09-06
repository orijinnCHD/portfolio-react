import React, { useEffect } from 'react';

const Mouse = () => {

    useEffect(()=>{
        const cursor = document.querySelector('.cursor');
        
        // window est null part dans react
        //le seul moyen s'est appelé comme ça
        // deplacement cursor cercle
        window.addEventListener('mousemove',(e)=>{
            cursor.style.top =e.y + "px";
            cursor.style.left =e.x + "px";
        });

        document.querySelectorAll(".hover").forEach((link)=>{
           //quand on est sur un lien nav
            link.addEventListener("mouseover",(e)=>{
                // hovered une class qui reduit le cercle
                // sur les classlist pas besoin du point avant le nom de la class
                
                cursor.classList.add("hovered");
            });
               
            // quand on sort dur les lien nav
            link.addEventListener("mouseleave",()=>{
                cursor.style.transition=".3s ease-out";
                cursor.classList.remove("hovered");
            })
        })
    },[])

    return (
        <span className="cursor">

        </span>
    );
};

export default Mouse;