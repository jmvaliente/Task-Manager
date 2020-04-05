import React, { Fragment } from 'react'
import Task from './Task'

const ListTasks = () => {

    const state = [
        {name: "Update System", complete: false},
        {name: "Change Colors", complete: false},
        {name: "Change UI", complete: true},
        {name: "Update Images", complete: true}
    ]

    return(
        <Fragment>
            <div className = "container">
                <ul className = "list-group">
                    {state.length === 0
                        ? (<li><p>Tasks no added</p></li>)
                        : state.map(el => (
                            <Task task = {el}
                            />
                            ))
                    }
                </ul>
            </div>
            <button
                className = "mt-2 btn btn-danger"
            >
                Delete Proyect</button>
        </Fragment>
    )
}

export default ListTasks