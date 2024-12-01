import './App.css'
// import Title from "./Title"
// import Producttab from './productTab'
// import Activity from './activity'
import ProductTab1 from './productTab1'

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
    {/* <Activity name="Anup" colors="pink"/> */}
  </div> 
  )
}

export default App
