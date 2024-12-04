import { useState } from "react";

let ludoboad=()=>{
    let [move,setmove]=useState({blue:0,red:0,yellow:0,green:0});

    let updateblue=()=>{
        // console.log(move.blue)
        setmove((premove)=>{
            return{ ...premove , blue:premove.blue+1}
        })
    }
    let updatered=()=>{
        // console.log(move.blue)
        setmove((premove)=>{
            return{ ...premove , red:premove.red+1}
        })
    }
    let updateyellow=()=>{
        // console.log(move.blue)
        setmove((premove)=>{
            return{ ...premove , yellow:premove.yellow+1}
        })
    }
    let updategreen=()=>{
        // console.log(move.blue)
        setmove((premove)=>{
            return{ ...premove , green:premove.green+1}
        })
    }

    return(
        <div>
            <p>blue={move.blue}</p>
            <button style={{backgroundColor:"blue"}} onClick={updateblue}>+1</button>
            <p>yellow={move.yellow}</p>
            <button style={{background:"yellow",color:"black"}} onClick={updateyellow}>+1</button>
            <p>green={move.green}</p>
            <button style={{background:"green"}} onClick={updategreen}>+1</button>
            <p>red={move.red}</p>
            <button style={{background:"red"}} onClick={updatered}>+1</button>
        </div>
    )
}

export default ludoboad;