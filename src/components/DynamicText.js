import React, { useEffect,useRef } from 'react';

const DynamicText = () => {

    const effectRan = useRef(false);

    useEffect(()=>{
       
        // si useeffect fait 2 boucle, utiliser le return ()=>{}
        // utiliser les useRef pour utiliser une seul fois
        // cette problemtatique est arrivé sur react 18

        if(effectRan.current ===false){
            console.log("hello world");

            const target =document.getElementById("text-target");
            let array=["simple","clear","smart","strong"];
            let wordIndex=0;
            let letterIndex=0;

            const createLetter =()=>{
                const letter = document.createElement("span");
                target.appendChild(letter);
        
                letter.classList.add("letter");
                letter.style.opacity ="0";
                letter.style.animation = "anim 5s ease forwards";
                letter.textContent = array[wordIndex][letterIndex];
            
                setTimeout(() =>{
                    letter.remove();
                },2000);
            };

            const loop = ()=>{
                setTimeout(()=>{

                    if(wordIndex >= array.length){
                        wordIndex = 0;
                        letterIndex = 0;
                        loop();
                    }else if(letterIndex < array[wordIndex].length){
                        createLetter();
                        letterIndex++;
                        loop();
                    }else{
                        letterIndex=0;
                        wordIndex++;
                        setTimeout(loop,2000);
                        
                    }
                    
                },80);
            }
            loop();
        }
       
        return ()=>{

            effectRan.current = true;

        }
        
    },[])

    

    return (
        
        <span className="dynamic-text">
             <span>simply</span>
             <span id="text-target">

             </span>
        </span>
           

    );
};

export default DynamicText;