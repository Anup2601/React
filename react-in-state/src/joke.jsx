import { useEffect, useState } from "react"

export default function joke(){
    let [joke,setjoke]=useState({setup:"",punchline:""});
    const URL="https://official-joke-api.appspot.com/random_joke";
    const getNewjoke =async()=>{
        try{
        let response=await fetch(URL);
        let jsoneResponse=await response.json();
        setjoke({setup:jsoneResponse.setup, punchline:jsoneResponse.punchline});
    }
    catch(error){
        console.log(error);
    }};


useEffect(()=>{
    const getFirstJoke=async  ()=>{
    let response=await fetch(URL);
    let jsoneResponse=await response.json();
    console.log(jsoneResponse);
    setjoke({setup:jsoneResponse.setup, punchline:jsoneResponse.punchline});
}
getFirstJoke();
},[])

return(
    <div>
        <h3>Joke</h3>
        {/* <h2>{joke.setup}</h2> */}
        <h2>{joke.setup}</h2>
        <h2>{joke.punchline}</h2>
        <button onClick={getNewjoke}>New Joke</button>
    </div>
)
}