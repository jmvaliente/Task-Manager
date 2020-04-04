import React, { useState } from 'react'
import {Link} from 'react-router-dom'

const Login = () =>{

    const [state,setState] = useState({
        email: '',
        password: ''
    })

    const { email, password } = state

    const loginChange = (e) =>{
        setState({
            ...state,
            [e.target.name] : e.target.value
        })

    }

    const loginSubmit = (e) =>{
        e.peventDefault()

        //validate


        //action
    }


    return(
        <div className="row justify-content-center">
            <div className="col-md-5">
                <h1>Login</h1>
                <form
                    onSubmit= {loginSubmit}
                >
                    <div className="form-group">
                        <label htmlFor="email">Email address</label>
                        <input  type="email" 
                                className="form-control"
                                id="email" 
                                name="email"
                                value={email}
                                onChange={loginChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input  type="password" 
                                className="form-control" 
                                id="password"
                                name="password"
                                value={password}
                                onChange={loginChange}
                        />
                    </div>
                    <button type="submit" 
                            className="btn btn-outline-primary"
                    >Submit</button>
                </form>
                <Link to = {'/create-user'}>
                    <button className="btn btn-outline-warning mt-3"
                    >Create User</button>
                </Link>
            </div>
        </div>
    )
}

export default Login