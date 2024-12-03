function intro(){
    console.log("Hello");
}

function keynote(){
    console.log("Byeeee!");
}

function button(){
    return(
        <div>
            <button onClick={intro}>Click Me</button>
            <button onClick={keynote}>Press Me</button>
        </div>
    )
}

export default button;