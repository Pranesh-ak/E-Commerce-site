import './App.css'
import HomePage from './Component/HomePage'
import Login from './Component/Login'
import Orders from './Component/Orders'
import Purchase from './Component/Purchase'
import SignUp from './Component/SignUp'
import { Route,Routes } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

function App() {
  return (
    <>
        <Routes>
        <Route path="/" element={<SignUp/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path='/home' element={<HomePage/>}></Route>
        <Route path='/purchase' element={<Purchase/>}></Route>
        <Route path="/order" element={<Orders/>}></Route>
      </Routes>
    </>
  )
}

export default App
  