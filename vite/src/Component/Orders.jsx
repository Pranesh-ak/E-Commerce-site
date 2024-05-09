import React from 'react'
import { useGlobalContext } from '../context'

function Orders() {
  const {lis}=useGlobalContext()
  return (<>
  <h1 >MY ORDERS</h1>
    
    <div>
      
    <div class="col">
          <div class="card shadow-sm">
            <div class="card-body">
              <p class="card-text">{lis.name}</p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
        </>
  )
}

export default Orders