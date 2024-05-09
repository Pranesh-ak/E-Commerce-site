import React,{useState} from 'react'
import axios from 'axios'
import { useGlobalContext } from '../context'
import { useNavigate } from 'react-router-dom'

function SignUp() {
  const nav=useNavigate()
  const[username,setUsername]=useState('')
  const[emailid,setemail]=useState('')
  const[mobile,setmobile]=useState('')
  const[passwd,setPassword]=useState('')
  const {Register}=useGlobalContext();
  function sig(){
    Register(username,emailid,mobile,passwd);
    nav("/login")
  }



  return (  
    <div>
      <div className="card">
      <div className='card-body'>
      <form>
      <h1 className="h3 mb-3 fw-normal">Create Your Account</h1>
    <div className="form-floating">
      <input type="text" className="form-control mt-3" id="floatingInput" placeholder="Enter your Name" onChange={(e)=>setUsername(e.target.value)} />
      <label htmlFor="floatingInput">Name</label>
    </div>
    <div className="form-floating">
      <input type="email" className="form-control mt-3" id="floatingInput" placeholder="name@example.com" onChange={(e)=>setemail(e.target.value)}/>
      <label htmlFor="floatingInput">Email address</label>
    </div>
    <div className="form-floating">
      <input type="text" className="form-control mt-3" id="floatingInput" placeholder="Enter your Mobile Number" onChange={(e)=>setmobile(e.target.value)}/>
      <label htmlFor="floatingInput">Mobile</label>
    </div>
    <div className="form-floating">
      <input type="password" className="form-control mt-3" id="floatingPassword" placeholder="Password" onChange={(e)=>setPassword(e.target.value)}/>
      <label htmlFor="floatingPassword">Password</label>
    </div>
    <button className="btn btn-lg btn-outline-info mb-3 mt-3" onClick={()=>{sig()}}>Sign up</button>
    <button className="btn btn-lg btn-outline-primary mb-3 mt-3" onClick={()=>{nav("/login")}} >LOGIN</button>
  </form>
  </div>
    </div>
    </div>

  )
}

export default SignUp