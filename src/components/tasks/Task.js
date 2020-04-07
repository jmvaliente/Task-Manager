import React from 'react'

const Task = ({task}) => {

    const {name,complete} = task

    return(
     <li className="list-group-item d-flex justify-content-between align-items-center">
            <p>{name}</p> 
            <div className="align-items-end">
                {complete 
                    ? <button className = "badge badge-primary badge-pill">Complete</button>
                    : <button className = "badge badge-danger badge-pill">incomplete</button>
                }
                <button className = "ml-2 p-2 bd-highlight badge badge-pill">Edit</button>
                <button className = "ml-2 p-2 bd-highlight badge badge-pill">Delete</button>
            </div>
     </li>
    )
}

export default Task