import React from 'react'
import NewProyectForm from '../proyect/NewProjectForm'

const Sidebar = () => {
    return(
        <aside>
            <h1>TASK <span>Manager</span></h1>
            <div className="mt-5">
                <NewProyectForm/>
            </div>
        </aside>
    )
}

export default Sidebar