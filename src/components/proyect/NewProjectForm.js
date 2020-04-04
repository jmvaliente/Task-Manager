import React, { Fragment, useState } from 'react'

const NewProyectForm = () =>{

    const [state, setState] = useState ({
        proyect: null,
        name: ''

    })

    const {name} = state

    const changeProyect = (e) =>{
        setState({
            ...state,
            [e.target.name] : e.target.value
        })
    }

    const submitProyect = (e) =>{
        e.preventDefault()
    }



    return(
        <Fragment>
            <button
                type="button"
                className="btn btn-primary"
            >Add Proyect</button>

            <form
                className="row justify-content-center"
                onSubmit={submitProyect}
            >
                <div className="col">
                    <div className="form-group">
                        <input
                            type="text"
                            id="name"
                            name="name"
                            placeholder="Name Proyect"
                            value={name}
                            onChange={changeProyect}
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="submit"
                            className="btn btn-primary mt-2"
                        />
                    </div>
                </div>
            </form>

        </Fragment>
    )
}

export default NewProyectForm