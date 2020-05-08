import React, { useState, useContext, useEffect } from 'react'
import {Link} from 'react-router-dom'
import alertContext from '../../context/alerts/alertContext'
import authContext from '../../context/auth/authContext'

const Login = (props) =>{

    const contextAlert = useContext(alertContext)
    const {alert, alertShow} = contextAlert

    const contextAuth = useContext(authContext)
    const {loginSuccessFn, msg, auth} = contextAuth

    const [state,setState] = useState({
        email: '',
        password: ''
    })

    const { email, password } = state

    useEffect(()=>{
        if(auth){
            props.history.push('/proyects')
        }

        if(msg){
            alertShow(`${msg}`,'alert')
        }

    },[msg, auth])

    const loginChange = (e) =>{
        setState({
            ...state,
            [e.target.name] : e.target.value
        })

    }

    const loginSubmit = (e) =>{
        e.preventDefault()

        //validate
        if(email.trim() === '' || password.trim() === ''){
            alertShow('all field needs')
        }

        //action

        loginSuccessFn({email, password})
    }


    return(
        <div className="row justify-content-center">
            <div className="col-md-5">
                <h1>Login</h1>
                {alert ?<p className={alert.category}>{alert.msg}</p> :null}
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