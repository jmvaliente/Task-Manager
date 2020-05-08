import React, {useContext, useEffect} from 'react'
import AuthContext from '../../context/auth/authContext'



const Navbar = () => {

    const contextAuth = useContext(AuthContext)
    const { user, getUserFn } = contextAuth

    useEffect(()=>{
        getUserFn()
    },[])


    return(

        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            
             

                <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                        <li className="nav-item active">
    {user ? <p className="nav-link">Hi <span className="text-light font-weight-bold">{user.name}</span></p> : null}
                            
                        </li>
                    </ul>
                    <p className="text-light">Logout</p>
            </div>
        </nav>

    )
}

export default Navbar