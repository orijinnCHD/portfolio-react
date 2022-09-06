import React, { useEffect,useRef } from 'react';

const TestHook = () => {
    
   // solution useEffect qui se joue deux fois
   // le useRef ne change pas de valeur malgré la fin de l'instruction de useEffect donc à la deuxiéme boucle effectRan reste true
   // tandis que useState ça valeur revient false
   const effectRan = useRef(false);
    useEffect(()=>{

        if(effectRan === false){
            //console.log("hello world");
        }

        return ()=>{
            effectRan.current = true;
        }
       
        
        
    },[])
    
    
    return (
        <div>
            
        </div>
    );
};

export default TestHook;