import React from 'react'
import QuesAnsList from './QuesAnsList'
import QuestionList from './QuestionList'
import './quesAnsList.css'
// import {Q_A_} from '../../data'

function QuesAnsPage({filterd}) {
  return (
    <div className='quesanspage'>
      <div className='left_quesanspage'>
        <QuesAnsList filterd={filterd} />
      </div>
      <div className='right_quesanspage'>
        <QuestionList />
      </div>

    </div>
  )
}

export default QuesAnsPage;