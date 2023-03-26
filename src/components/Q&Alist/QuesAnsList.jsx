import React from 'react'
import {User} from '../../data'
import { Q_A_ } from '../../data'
import './quesAnsList.css'
function QuesAnsList({filterd}) {
    console.log(filterd);
  return (
    <div className='maincontainer'>
    {(filterd.length>0? filterd:Q_A_).map((ques)=>
        <div key={ques.id} className="info">
            <div className='left_container'>
                <img  className='profile_image'
                src={(User.filter((user)=> user.id === ques.id)[0].photo)  } alt="" />
                <span className='username'>
                {User.filter((user) => user.id===ques.id)[0].username  }
                </span>
            </div>
            <hr className='user_hr' />
            <div className='user_box'>
                <div className='user_option'>
                    <h2>{ques.question}</h2>
                    <p>{ques.answer}</p>
                   {/* { ques.answers && <p>{ques.answers}</p> } */}
                </div>
            </div>
        </div>
    )}
    </div>
  )
}

export default QuesAnsList