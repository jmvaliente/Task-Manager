import React, {useState, useContext} from 'react'

import proyectContext from '../../context/proyects/proyectContext'
import taskContext from '../../context/tasks/taskContext'

const FormTask = () =>{

    const context = useContext(proyectContext)
    const contextTask = useContext(taskContext)

    const { activeProyect } = context
    const { addTaskFn, listTaskFn } = contextTask

    const [state, setState] = useState({
        name:'',
        complete: false,
        proyectId: null
    })

    const {name} = state

    const changeTask = (e) =>{
        setState({
            ...state,
            [e.target.name] : e.target.value
        })
    }

    const onSubmit = (e) =>{
        e.preventDefault()
        
        state.proyectId = activeProyect[0].id
        addTaskFn(state)
        listTaskFn(activeProyect[0].id)

        setState({
            name: '',
            proyectId: null
        })

    }

    if(!activeProyect) return null
    
    return(
            <form
                onSubmit={onSubmit}
            >
                <div>
                    <input
                        type = "text"
                        placeholder = "Name Task"
                        id = "name"
                        name = "name"
                        value = {name}
                        onChange = {changeTask}
                    />
                </div>
                <div>
                    <input
                        type = "submit"
                        className = "btn btn-primary"
                        value = "Add Task"

                    />
                </div>
            </form>
    )
}

export default FormTask