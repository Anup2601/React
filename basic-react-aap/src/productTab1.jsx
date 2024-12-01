import Product from "./product1";
function productTab1(){
    let styles={
        display:"flex",
        flexWarp:"warp",
        justifyContentemt:"center",
        alignItems:"center",
        padding:"10px",
    };
    return(
        
        <div style={styles}>
            <Product title={"Logitech Mx Master"} idx={0}/>
            <Product title={"Apple pencile"} idx={1}/>
            <Product title={"Zebronics zeb-teansformer"} idx={2}/>
            <Product title={"Petronic Toad"} idx={3}/>
        </div>
    )
}

export default productTab1;