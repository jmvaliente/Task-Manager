import React, { Fragment, useState, useContext} from 'react'

import proyectContext from '../../context/proyects/proyectContext'

const NewProyectForm = () =>{

    const context = useContext(proyectContext)

    const [state, setState] = useState ({
        name: ''
    })

    const {newProyect, newProyectFn, addProyectFn, validateNewProyectFn} = context
    const {name} = state

    const changeProyect = (e) =>{
        setState({
            ...state,
            [e.target.name] : e.target.value
        })
    }

    
    const clickEvent = () =>{
        setState({
            ...state,
        })
        newProyectFn()
    }

    const submitProyect = (e) =>{
        e.preventDefault()

        //validate form
        if(name.trim()===''){
            validateNewProyectFn()
            return
        }

        //action
        addProyectFn(state)

        //reset value
        setState({
            name: ''
        })

        
    }

    return(
        <Fragment>

            {newProyect===false ? 
                <button
                    type="button"
                    className="btn btn-primary"
                    onClick={clickEvent}
                >Add Proyect</button>
            :null}
            {newProyect===true ? 
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