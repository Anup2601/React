import "./product.css"
function Product({title,price,feature,feature2 }){
    // let list=feature.map((features)=><li>{features}</li>)
    let styles={backgroundColor: price>30000?"red":"blue"}
    return (
        <div className="Product" style={styles}>
            <h3>{title}</h3>
            <p>price:{price}</p>
            {/* <p>{list}</p> */}
            {price>=10000?<p>Discount:5%</p>:null}
            {price>30000 &&<p>Free Delivery</p>}
            {feature && feature.length > 0 && (
                <ul>
                    {feature.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            )}
            <p>{feature2}</p>
        </div>
        
    )
}
export default Product;