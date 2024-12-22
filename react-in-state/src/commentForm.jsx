// import { useState } from "react";
import React from 'react';
import { useFormik } from 'formik';


const validate = values => {
    const errors = {};
    if (!values.username) {
      errors.username = 'Required';
    } else if (values.username.length > 15) {
      errors.username = 'Must be 15 characters or less';
    }
  
    if (!values.remark) {
      errors.remark = 'Required';
    } else if (values.remark.length > 200) {
      errors.remark = 'Must be 200 characters or less';
    }
  
    if (!values.rating) {
      errors.rating = 'Required';
    } else if (values.rating>5) {
      errors.rating = 'Invalid rating Must be less the 6';
    }
  
    return errors;
  };

export default function commentForm({addNewComment}){
    // let [formData,setFormData]=useState({
    //     username:"",
    //     remark:"",
    //     rating:"5"
    // })
    const formik = useFormik({
        initialValues: {
          username: '',
          remark: '',
          rating: '',
        },
        validate,
        onSubmit: values => {
          alert(JSON.stringify(values, null, 2));
        },
      });


// let handleChange=(event)=>{
//     setFormData((currentdata)=>{
//         return{...currentdata,[event.target.name]:[event.target.value]}
//     })
// }

// let handleSubmition=(event)=>{
//     event.preventDefault();
//     console.log(formData);
    // addNewComment(formData);
//     setFormData({
//         username:"",
//         remark:"",
//         rating:"5"

//     })
// }

return(
    <div>
        <form>
        <h1>Comment Form</h1>
            <input
            placeholder="Username"
            value={formik.values.username}
            type="text"
            id="username"
            name="username"
            onChange={formik.handleChange}>
            </input>
            {formik.errors.username ? <div>{formik.errors.username}</div> : null}
            <br></br>
            <br></br>
            <textarea
            placeholder="remark"
            value={formik.values.remark}
            type="text"
            id="remark"
            name="remark"
            onChange={formik.handleChange}>
            </textarea>
            {formik.errors.remark ? <div>{formik.errors.remark}</div> : null}
            <br></br>
            <br></br>
            <input
            placeholder="rating"
            value={formik.values.rating}
            type="number"
            id="rating"
            name="rating"
            min={1}
            max={5}
            onChange={formik.handleChange}>
            </input>
            {formik.errors.rating ? <div>{formik.errors.rating}</div> : null}
            <br></br>
            <br></br>
            <button onClick={formik.handleSubmit} type='Submit'>Submit</button>
        </form>
    </div>
)

}