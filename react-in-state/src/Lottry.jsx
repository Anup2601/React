import { useState } from "react"
import Ticket from "./Ticket";

function Lottry({n=3,WinningSum=15}){
    
    function randnum(n){
        let arr=new Array(n);
        for(let i=0;i<n;i++){
            arr[i]=Math.floor(Math.random()*10);
        }
        return arr;
       
}
    let [ticket,setticket]=useState(randnum(n));
    let [price,setprice]=useState(0);
    let sum=(arr)=>{
        return arr.reduce((sum,curr)=>sum+curr,0);
    }
    let iswin=sum(ticket)===WinningSum;
    let newTicket=()=>{
        setticket(randnum(n))
        setprice(price+=100)
    }

   
    return(
        <div>
            <h1>Lottery Game</h1>
             <Ticket ticket={ticket}/>
            <br></br>
            <br></br>
            <h4>{iswin && "Congratulation you win $100000"}</h4>
            <button onClick={newTicket}>Buy Ticket</button>
            <h4>Price:-${price}</h4>
        </div>
    )
}

export default Lottry;