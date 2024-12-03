function handleEvent(event){
    console.log("data is submited");
    event.preventDefault();
}

function form (){
    return(
        <form onSubmit={handleEvent}>
            <input placeholder="Write something"></input>
            <button>Submit</button>
        </form>
    );
};

export default form;