import React from 'react'
 
const Filters = ({ onSelectCategory, onSelectStatus, onselectedwatch }) => {
 
  
  return (
     <>
       <div className="heading_container heading_center">
            <h2>Latest Watches</h2>
            <div className="heading filters">
              <div className="btn-group btn-group-toggle btn-colors" data-toggle="buttons">
                <label className="btn btn-danger active" onClick={() => onselectedwatch('watch')}> 
                  <input type="radio" name="options" id="option1" autoComplete="off" checked /> All
                </label>
                <label className="btn btn-danger" onClick={() => onSelectCategory('Mens')}>
                  <input type="radio" name="options" id="option2" autoComplete="off" /> Mens
                </label>
                <label className="btn btn-danger" onClick={() => onSelectCategory('Women')}>
                  <input type="radio" name="options" id="option3" autoComplete="off" /> Women
                </label>
                <label className="btn btn-danger" onClick={() => onSelectStatus('Featured')}>
                  <input type="radio" name="options" id="option3" autoComplete="off" /> Featured
                </label>
                <label className="btn btn-danger" onClick={() => onSelectStatus('New')}>
                  <input type="radio" name="options" id="option3" autoComplete="off" /> New
                </label>
              </div>
            </div>
          </div>
     </>
  )
}

export default Filters