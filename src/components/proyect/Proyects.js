import React from 'react'
import Sidebar from '../layout/Sidebar'
import ListProyects from './ListProyects'
import Navbar from '../layout/Navbar'
import FormTask from '../tasks/FormTask'
import ListTask from '../tasks/ListTasks'

const Proyects = () =>{
    return(
        <div className="container">
            <div className="row justify-content-md-center">
                <div className="col-md-auto mt-4">
                    <Sidebar/>
                    <h2>Proyects</h2>
                    <ListProyects/>
                </div>
                <div className="col-md-9 mt-4">
                    <Navbar/>
                    <main>
                        <FormTask/>
                        <div>
                        <ListTask/>
                        </div>
                    </main>
                </div>
            </div>
        </div>
    )
}

export default Proyects