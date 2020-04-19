import React, { useState, useContext } from 'react'
import {Link} from 'react-router-dom'
import alertContext from '../../context/alerts/alertContext'

const AddUser = () =>{

    const contextAlert = useContext(alertContext)
    const {alert, alertShow} = contextAlert

    const [state,setState] = useState({
        email: '',
        password: '',
        checkPassword: '',
        name: '',
        surname: ''
    })

    const { email, password, checkPassword ,name, surname } = state

    const createChange = (e) =>{
        setState({
            ...state,
            [e.target.name] : e.target.value
        })

    }

    const createSubmit = e =>{
        e.preventDefault()

        //validate
        if (email.trim()==='' ||
            password.trim()==='' ||
            checkPassword.trim()==='' ||
            name.trim()==='' ||
            surname.trim()===''){
            
                alertShow('Need complete all fields','alert')
                return
            }
        if (password.length <=5){
                alertShow('Password min 6 characteres', 'alert')
                return     
        }
        if (password !== checkPassword){
                alertShow('Password is not equal','alert')
                return
        }
        

        //action
    }


    return(
        <div className="row justify-content-center">
            <div className="col-md-5">
                <h1>Create User</h1>
                <form
                    onSubmit= {createSubmit}
                    >
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input  type="text" 
                                className="form-control"
                                id="name" 
                                name="name"
                                value={name}
                                onChange={createChange}
                                />
                    </div>
                    <div className="form-group">
                        <label htmlFor="surname">Surname</label>
                        <input  type="text" 
                                className="form-control"
                                id="surname" 
                                name="surname"
                                value={surname}
                                onChange={createChange}
                                />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email address</label>
                        <input  type="email" 
                                className="form-control"
                                id="email" 
                                name="email"
                                value={email}
                                onChange={createChange}
                                />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input  type="password" 
                                className="form-control" 
                                id="password"
                                name="password"
                                value={password}
                                onChange={createChange}
                                />
                    </div>
                    <div className="form-group">
                        <label htmlFor="checkPasword">Check Password</label>
                        <input  type="password" 
                                className="form-control" 
                                id="checkPasword"
                                name="checkPassword"
                                value={checkPassword}
                                onChange={createChange}
                                />
                    </div>
                    {alert ?<p className={alert.category}>{alert.msg}</p> :null}
                    <button type="submit" 
                            className="btn btn-outline-primary"
                            >Register</button>
                </form>
                <Link to = {'/'}>
                    <button className="btn btn-outline-warning mt-3"
                    >Login</button>
                </Link>
            </div>
        </div>
    )
}

export default AddUser