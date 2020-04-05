import React from 'react'
import NewProyectForm from '../proyect/NewProjectForm'

const Sidebar = () => {
    return(
        <aside>
            <h1 className="font-weight-bold">TASK<span className="font-weight-light">Manager</span></h1>
            <div className="mt-5">
                <NewProyectForm/>
            </div>
        </aside>
    )
}

export default Sidebar