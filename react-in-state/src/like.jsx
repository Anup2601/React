import { useState } from "react";

function like(){
    let [click,setclick]=useState(false);

    function toggled(){
        setclick(!click);
    }
    let styles={color:"red"};
    return(
        <div>
            <p onClick={toggled}>{click?
                (<i className="fa-solid fa-heart" style={styles}></i>):
            (<i className="fa-regular fa-heart"></i>)}
            </p>
        </div>
    )
}
export default like;