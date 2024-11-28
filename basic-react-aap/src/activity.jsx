function activity({name,colors}){
    let styles={color:colors};
    return(
        <div >
            <h1 style={styles}>Hello {name}</h1>
        </div>
    )
}



export default activity;