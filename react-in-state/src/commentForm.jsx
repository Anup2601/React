import { useState } from "react";

export default function commentForm({addNewComment}){
    let [formData,setFormData]=useState({
        username:"",
        remark:"",
        rating:"5"
    })


let handleChange=(event)=>{
    setFormData((currentdata)=>{
        return{...currentdata,[event.target.name]:[event.target.value]}
    })
}

let handleSubmition=(event)=>{
    event.preventDefault();
    console.log(formData);
    addNewComment(formData);
    setFormData({
        username:"",
        remark:"",
        rating:"5"

    })
}

return(
    <div>
        <form>
        <h1>Comment Form</h1>
            <input
            placeholder="Username"
            value={formData.username}
            type="text"
            id="username"
            name="username"
            onChange={handleChange}>
            </input>
            <br></br>
            <br></br>
            <textarea
            placeholder="remark"
            value={formData.remark}
            type="text"
            id="remark"
            name="remark"
            onChange={handleChange}>
            </textarea>
            <br></br>
            <br></br>
            <input
            placeholder="rating"
            value={formData.rating}
            type="number"
            id="rating"
            name="rating"
            min={1}
            max={5}
            onChange={handleChange}>
            </input>
            <br></br>
            <br></br>
            <button onClick={handleSubmition}>Submit</button>
        </form>
    </div>
)

}