import { useState } from "react";


let counter=()=>{
    let [count,setcount]=useState(0);
    function incount(){
        setcount((newcount)=>{
            return newcount+1;
        });
        setcount((newcount)=>{
            return newcount+1;
        });
        console.log(count);
    }
    return(
        <div>
            <h3>count:- {count}</h3>
            <button onClick={incount}>Increase count</button>
        </div>
    );
}

export default counter;