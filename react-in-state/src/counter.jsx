import { useState } from "react";


function counter(){
    let [count,setcount]=useState(0);
    function incount(){
        setcount(count+1);
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