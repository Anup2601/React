import "./product.css";
import Price from "./price";
function product1({title,idx,Description}){
    let OldPrices=["12,999","999","1,299","599"];
    let NewPrices=["9,999","899","1,999","499"];
    let Descriptions=[
        ["8000 DPI","5 Programmable buttons"],
        ["intuitive surface","designed for iPad Pro"],
        ["designed for ipad pro","intuitive surface"],
        ["wireless","optical orientation"],
    ];
    return(
        <div className="Product" >
            <h4>{title}</h4>
            <p>{Descriptions[idx][0]}</p>
            <p>{Descriptions[idx][1]}</p>
            <Price OldPrice={OldPrices[idx]} NewPrice={NewPrices[idx]}/>
        </div>
    );
}

export default product1;