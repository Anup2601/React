import { useEffect, useState } from "react";


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
useEffect(function sideEffect(){
    console.log("This is side effect");
});

    return(
        <div>
            <h3>count:- {count}</h3>
            <button onClick={incount}>Increase count</button>
        </div>
    );
}

export default counter;