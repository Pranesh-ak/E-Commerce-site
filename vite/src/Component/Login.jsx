import React from 'react'
import { useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { useGlobalContext } from '../context'




function Login() {
  const nav=useNavigate()
  const {Loguser}=useGlobalContext();
  const[username,setUsername]=useState('')
  const[password,setPass]=useState('')
  const {id,Setid}=useGlobalContext() 

  function log(){
    Loguser(username,password)
    if(id==1)
    {
    nav("/home")
    }
    else{
      alert("USERNAME INVALID")
    }
  }
  
  return (
    <div className='card'>
    <div className='card-body'>
    <form>
    <h1 className="h3 mb-3 fw-normal">WELCOME! Log In To Your Account</h1>
    <div className="form-floating">
      <input type="email" className="form-control mt-3" id="floatingInput" placeholder="Username" onChange={(e)=>setUsername(e.target.value)}/>
      <label>Username</label>
    </div>
    <div className="form-floating">
      <input type="password" className="form-control mt-3" id="floatingPassword" placeholder="Password" onChange={(e)=>setPass(e.target.value)}/>
      <label>Password</label>
    </div>
    <button className="btn btn-lg btn-outline-info mb-3 mt-3" onClick={()=>{log();}}>Log in</button>
  </form>
  </div>
    </div>
  )
}

export default Login