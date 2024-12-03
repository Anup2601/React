function effect(){
    console.log("hover");
}

function hover(){
    return(
        <div >
            <button onMouseOver={effect}>Hover Over Me!</button>
        </div>
    )
}

export default hover;