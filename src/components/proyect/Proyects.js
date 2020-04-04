import React from 'react'
import Sidebar from '../layout/Sidebar'

const Proyects = () =>{
    return(
        <div className="container">
            <div className="row">
                <div className="col-4 mt-4">
                    <Sidebar/>
                    <h2>Proyects</h2>
                </div>
                <div className="col-8 mt-4">
                    Details
                </div>
            </div>
        </div>
    )
}

export default Proyects