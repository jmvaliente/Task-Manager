import React from 'react'

const Navbar = () => {
    return(

        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            
             

                <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                        <li className="nav-item active">
                            <p className="nav-link">Hi <span className="text-light font-weight-bold">Jose</span></p>
                        </li>
                    </ul>
                    <p className="text-light">Logout</p>
            </div>
        </nav>

    )
}

export default Navbar