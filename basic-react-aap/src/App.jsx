import './App.css'
import Title from "./Title"
import Producttab from './productTab'

function Discription(){
  return <p>This is a Discription</p>
}

function App() {

  return (
  <div>
    <h1>This is Anup Mishra</h1>
    {/* <Title/>
    <Discription/>
    <Title/>
    <Discription/> */}
    <Producttab/>
  </div> 
  )
}

export default App
