import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './addQues.css'
import {Q_A_} from '../../data'
import { User } from '../../data';
function AddQues() {
    const[ques, setQues] = useState("");
    const navigate = useNavigate();
    const handleAddQues = (e)=>{
        e.preventDefault();
        if(ques.trim()=== ""){
            window.alert("Do not add empty questions.");
            return;
        }
        const filtered = User.filter((user)=> user.username === localStorage.getItem("user") )
        const newQues = {
            id: Q_A_.length + 1,
            answeredBy: "parth",
            questionedBy: "aditya",
            question: ques.trim(),
            answer: [],
        };
        const user = {
            id : User.length + 1,
            username: filtered[0].username,
            photo: filtered[0].photo,
            password: filtered[0].password,
            email: filtered[0].email
        }
            User.push(user);
            Q_A_.push(newQues);
            setQues("");
            navigate('/home');
        }
    // console.log(filtered[0].id)
    // console.log(Q_A_);
    const handleCancel = () => {
        setQues("");
    }
  return (
    <div className='add_ques'>
        <h2>Add Question</h2>
        <form onSubmit={handleAddQues} >
            <label htmlFor="question">Question:</label>
            <input
            className='input_text'
             placeholder = "Type Your Question here  ...."
             value={ques}
             onChange={(e)=>setQues(e.target.value)}
             type="text" id='question' />
            <div className='add_ques_btn'>
                <button type='submit'>Add Question</button>
                <button  type="button" onClick={handleCancel}>Cancel</button>
            </div>
        </form>
    </div>
  )
}

export default AddQues;