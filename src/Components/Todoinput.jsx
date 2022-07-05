import React from 'react'

function Todoinput() {
  return (
    <div>
        <h3>Todoinput</h3>
        <div classname="row m-2">
            <input type="text" 
            className="form-control"/>
            <button
             className="btn btn-primary" m-2>ADD</button>
        </div>
        
    </div>
  )
}

export default Todoinput
