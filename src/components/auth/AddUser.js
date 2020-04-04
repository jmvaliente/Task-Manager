import React, { useState } from 'react'
import {Link} from 'react-router-dom'

const AddUser = () =>{

    const [state,setState] = useState({
        email: '',
        password: '',
        name: '',
        surname: ''
    })

    const { email, password, name, surname } = state

    const createChange = (e) =>{
        setState({
            ...state,
            [e.target.name] : e.target.value
        })

    }

    const createSubmit = (e) =>{
        e.peventDefault()

        //validate


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
                        <input  type="name" 
                                className="form-control"
                                id="name" 
                                name="name"
                                value={name}
                                onChange={createChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="surname">Surname</label>
                        <input  type="surname" 
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
                    <button type="submit" 
                            className="btn btn-outline-primary"
                    >Submit</button>
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