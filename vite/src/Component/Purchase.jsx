import React from 'react'
import { useNavigate} from 'react-router-dom'
import { useGlobalContext } from '../context'

function Purchase() {  
  const {lis,setLis}=useGlobalContext();
  const nav=useNavigate()
  return (<>
    <div className="card shadow-sm">
            <div className="card-body">
              <p className="card-text">NAME : {lis.name}</p>
              <p className="card-text">Price: {lis.price}</p>
              <div className="d-flex justify-content-between align-items-center">
                <div className="btn-group">
                  <button type="button" className="btn btn-lg btn-outline-info mb-3 mt-3" onClick={()=>{alert("order confirmed...");nav("/order")}}>Buy Now!</button>
                </div>
              </div>
            </div>
        </div>
        </>
  )
}

export default Purchase