import React, {useState} from 'react'
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import {User} from '../../data';
import {useNavigate } from 'react-router-dom'
import {
    MDBBtn,
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBInput,
    MDBIcon
  }
  from 'mdb-react-ui-kit';
function LoginPage() {
  const navigate = useNavigate();
    const [username, setUsername]= useState("");
    const [password, setPassword]= useState("");
    const handleSUbmit =(e) =>{
        const userFind = User.find((user)=>user.username === username && user.password === password);
        if(userFind){
        navigate("/home")
        localStorage.setItem("user", username);
        } else {
            window.alert("invalid Username or password!")
        }
    }

  return (
    <MDBContainer fluid>

    <MDBRow className='d-flex justify-content-center align-items-center h-100'>
      <MDBCol col='12'>

        <MDBCard className='bg-dark text-white my-5 mx-auto' style={{borderRadius: '1rem', maxWidth: '400px'}}>
          <MDBCardBody className='p-5 d-flex flex-column align-items-center mx-auto w-100'>

            <h2 className="fw-bold mb-2 text-uppercase">Login</h2>
            <p className="text-white-50 mb-3">Please enter your login and password!</p>
            <p className="text-white-50 mb-5">You can use username aditya <br/>  and password 732385 for demo! </p>

            <MDBInput style={{color:"red"}} value={username} onChange={(e)=>setUsername(e.target.value)} wrapperClass='mb-4 mx-5 w-100' labelClass='text-white' label='Username' id='formControlLg' type='text' size="lg"/>
            <MDBInput style={{color:"red"}} value={password} onChange={(e)=>setPassword(e.target.value)}  wrapperClass='mb-4 mx-5 w-100' labelClass='text-white' label='Password' id='formControlLg' type='password' size="lg"/>

            <p className="small mb-3 pb-lg-2"><a class="text-white-50" href="#!">Forgot password?</a></p>
            <MDBBtn onClick={handleSUbmit} outline className='mx-2 px-5' color='white' size='lg'>
              Login
            </MDBBtn>

            <div className='d-flex flex-row mt-3 mb-5'>
              <MDBBtn tag='a' color='none' className='m-3' style={{ color: 'white' }}>
                <MDBIcon fab icon='facebook-f' size="lg"/>
              </MDBBtn>

              <MDBBtn tag='a' color='none' className='m-3' style={{ color: 'white' }}>
                <MDBIcon fab icon='twitter' size="lg"/>
              </MDBBtn>

              <MDBBtn tag='a' color='none' className='m-3' style={{ color: 'white' }}>
                <MDBIcon fab icon='google' size="lg"/>
              </MDBBtn>
            </div>

            <div>
              <p className="mb-0">Don't have an account? <a href="#!" class="text-white-50 fw-bold">Sign Up</a></p>

            </div>
          </MDBCardBody>
        </MDBCard>

      </MDBCol>
    </MDBRow>

  </MDBContainer>
  )
}

export default LoginPage