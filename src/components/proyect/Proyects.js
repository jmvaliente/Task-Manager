import React from 'react'
import Sidebar from '../layout/Sidebar'
import ListProyects from './ListProyects'
import Navbar from '../layout/Navbar'

const Proyects = () =>{
    return(
        <div className="container">
            <div className="row">
                <div className="col-4 mt-4">
                    <Sidebar/>
                    <h2>Proyects</h2>
                    <ListProyects/>
                </div>
                <div className="col-8 mt-4">
                    <Navbar/>
                </div>
            </div>
        </div>
    )
}

export default Proyects