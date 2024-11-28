import './App.css'
import Title from "./Title"
import Producttab from './productTab'
import Activity from './activity'

function Discription(){
  return <p>This is a Discription</p>
}

function App() {

  return (
  <div>
    <h1>This is Anup Mishra</h1>
    <Title/>
    <Discription/>
    <Title/>
    <Discription/>
    <Producttab/>
    <Activity name="Anup" colors="pink"/>
    <Activity name="Shreya" colors="red"/>
    <Activity name="harsh" colors="blue"/>
  </div> 
  )
}

export default App
