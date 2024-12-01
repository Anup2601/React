import Product from "./product"

function Producttab(){
    let options=["hi-tech ","durable ","fast "];
    let options2=[<li>20%</li>,<li>30%</li>];
    // let options2={a: "hi-tech",b: "durable",c:"fast"};
    return (
        <>
            <Product title="Phone"/>
            <Product title="Laptop"/>
            <Product title="Earbud"/>
            <Product title="SmartWatch"/>
        </>
    )
}
export default Producttab;