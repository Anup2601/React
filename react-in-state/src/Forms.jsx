import { useState } from "react"

export default function Forms(){
    let [formData,setFormData]=useState({
        fullName:"",
        userName:"",
        password:""
    })

    let handleChange=(event)=>{
        setFormData((currdata)=>{
            return{...currdata,[event.target.name]:[event.target.value]}
        })
    }
    let handleSubmition=(event)=>{
        event.preventDefault();
        console.log(formData);
        setFormData({
            fullName:"",
            userName:"",
            password:""
        })
    }
     
    return(
        <div>
        <h1>Forms in React</h1>
            <form>
            <label htmlFor="fullName">FullName</label>
              <input 
                placeholder="Enter your name" 
                value={formData.fullName} 
                type="text"
                id="fullName"
                name="fullName"
                onChange={handleChange}>
              </input>
              <br></br>
              <br></br>
              <label htmlFor="userName">UserName</label>
              <input 
                placeholder="Enter your name" 
                value={formData.userName} 
                type="text"
                id="userName"
                name="userName"
                onChange={handleChange}>
              </input>
              <br></br>
              <br></br>
              <label htmlFor="password">Password</label>
              <input 
                placeholder="Enter your password" 
                value={formData.password} 
                type="password"
                id="password"
                name="password"
                onChange={handleChange}>
              </input>
              <br></br>
              <br></br>
              <button onClick={handleSubmition}>Submit</button>
            </form>
            
        </div>
    )

}