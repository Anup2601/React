import './App.css'
// import Title from "./Title"
// import Producttab from './productTab'
// import Activity from './activity'
import Button from './button'
import ProductTab1 from './productTab1'
import Hover from './hover'
import Form from './form'

function Discription(){
  return <p>This is a Discription</p>
}

function App() {

  return (
  <div>
    <h1>This is Anup Mishra</h1>
    {/* <Title/> */}
    {/* <Discription/> */}
    
    <ProductTab1/>
    <br></br>
    <Button/>
    <br></br>
    <Hover/>
    <Form/>
    {/* <Activity name="Anup" colors="pink"/> */}
  </div> 
  )
}

export default App
