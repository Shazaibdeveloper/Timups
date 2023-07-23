import React from 'react'

const Total = (price) => {
  return (
     <>
     <div className='container total-container'>
        <div className='row text-center total-div'>
            <div className='col-md-6'><h2>Total</h2></div>
            <div className='col-md-6'>${price.price}</div>
        </div>
     </div>
     </>
  )
}

export default Total