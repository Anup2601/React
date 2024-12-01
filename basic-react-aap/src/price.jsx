function price({OldPrice ,NewPrice}){
    let oldStyles={
        textDecorationLine:"line-through",
    }
    let newStyles={
        fontWeight:"bold",
    }
    let styles={
        backgroundColor:"yellow",
        hight:"50px",
        color:"black",
        borderBottomLeftRadius:"15px",
        borderBottomRightRadius:"15px",
    }
    return(
        <div style={styles}>
            <span style={oldStyles}>{OldPrice}</span>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <span style={newStyles}>{NewPrice}</span>
        </div>
    )
}

export default price;