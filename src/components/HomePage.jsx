import React, {useState} from 'react'
import  './Header/header.css'
import QuesAnsPage from './Q&Alist/QuesAnsPage'
// import './header/header.css'
import { useNavigate } from 'react-router-dom';
import { Q_A_ } from '../data';
import SearchIcon from '@mui/icons-material/Search';
function HomePage() {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const handleSearch = (e) =>{
      setSearch(e.target.value)
  }
  function handleAddques() {
      navigate('/addques')
  }
  function handleAddans () {
      navigate("/addans")
  }
  function handleLogOut(){
      localStorage.removeItem("user");
      navigate("/")
  }
  const filterd = Q_A_.filter(
      (ques)=> ques.question.toLowerCase().includes(search.toLowerCase()) || 
             ques.answer.toLowerCase().includes(search.toLowerCase()) 
  )
  return (
    <>
    {/* <Header /> */}
    <div className='header'>
            <h1 className="logo">Quora</h1>
            <div className='question_search'>
                <input type="text"
                    className='search-input'
                    placeholder='Search...'
                    value={search}
                    onChange={handleSearch}
                />
                <SearchIcon />
            </div>
            <div className='handle_btn'>
                <button onClick={handleAddques}>Add question</button>
                <button onClick={handleAddans}>Answer Question</button>
                <button onClick={handleLogOut}>Logout</button>
            </div>
        </div>
    <QuesAnsPage filterd={filterd} />
    </>
  )
}

export default HomePage