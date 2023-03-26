import React from 'react'
import './quesAnsList.css'
import {Q_A_} from '../../data'
import { Link } from 'react-router-dom'
function QuestionList() {
  return (
    <div className='questionlist001'>
        <h2>List of Questions</h2>
        <ul>
            {Q_A_.map((Q)=>
            (
              <Link to='/addans'><li key={Q.id}>{Q.question}</li></Link>
            )
            )}
        </ul>
    </div>
  )
}

export default QuestionList