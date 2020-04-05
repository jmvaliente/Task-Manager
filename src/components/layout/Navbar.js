import React from 'react'

const Navbar = () => {
    return(

        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            
             

                <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                    <li className="nav-item active">
                        <p className="nav-link">Home <span className="sr-only">(current)</span></p>
                    </li>
                    <li className="nav-item">
                        <p className="nav-link">Link</p>
                    </li>
                    <li className="nav-item">
                        <p className="nav-link disabled">Disabled</p>
                    </li>
                    </ul>
                    
                    <p className="text-light">Logout</p>
                
            </div>
        </nav>

    )
}

export default Navbar