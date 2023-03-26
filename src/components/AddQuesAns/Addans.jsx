import React, { useState } from 'react'
import './addans.css'
import { useNavigate } from 'react-router-dom'
import { Q_A_ } from '../../data'
function Addans() {
  const [selectques, setselecQues] = useState("");
  const [selectans, setselectAns] = useState([]);


  const navigate = useNavigate();
  const handleAnswer = (e) => {
    e.preventDefault();
    const quest = Q_A_.find((q) => q.id === selectques);

    quest.answer = selectans;
    setselectAns("");
    navigate("/home");
  }
  console.log(Q_A_);
  const handleCancel = () => {
    setselectAns("");
    navigate("/home");
  }
 
  return (
    <div className='add_answer'>
      <h2>Add Answer</h2>
      <form onSubmit={handleAnswer}>
        <label htmlFor="question">Question:</label>
        <select
          onChange={(e) => setselecQues(e.target.value)}
          value={selectques}
          id="question">
          <option value="">Search a question</option>
          {Q_A_.map((ques) => <option key={ques.id} value={ques.id}>{ques.question}</option>
          )}
        </select>
        <label htmlFor="answer">Answer:</label>
        <textarea id="answer" value={selectans}
          onChange={(e) => setselectAns(e.target.value)}
        >

        </textarea>
        <div className='add_answer_btn'>
          <button type='submit' >Add Answer</button>
          <button type='button' onClick={handleCancel}>Cancel</button>
        </div>
      </form>
    </div>
  )
}

export default Addans