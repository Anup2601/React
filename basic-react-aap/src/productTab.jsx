import Product from "./product"

function Producttab(){
    let options=["hi-tech ","durable ","fast "];
    let options2=[<li>20%</li>,<li>30%</li>];
    // let options2={a: "hi-tech",b: "durable",c:"fast"};
    return (
        <>
            <Product title="Phone" price={30000} feature={options} feature2={options2}/>
            <Product title="Laptop" price={60000}/>
            <Product title="Earbud" price={5000}/>
        </>
    )
}
export default Producttab;