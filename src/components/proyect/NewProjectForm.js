import React, { Fragment, useState } from 'react'

const NewProyectForm = () =>{

    const [state, setState] = useState ({
        proyect: false,
        name: ''

    })

    const {name, proyect} = state

    const changeProyect = (e) =>{
        setState({
            ...state,
            [e.target.name] : e.target.value
        })
    }

    const clickEvent = () =>{
        setState({
            ...state,
            proyect: true
        })
    }

    const submitProyect = (e) =>{
        e.preventDefault()

        //verificar campos

        //action

    }



    return(
        <Fragment>

            {proyect===false ? 
                <button
                    type="button"
                    className="btn btn-primary"
                    onClick={clickEvent}
                >Add Proyect</button>
            :null}
            {proyect===true ? 
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
                                value="Submit"
                            />
                        </div>
                    </div>
                </form>
            :null}

        </Fragment>
    )
}

export default NewProyectForm