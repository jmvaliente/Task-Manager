import React, {useState, useContext} from 'react'

import proyectContext from '../../context/proyects/proyectContext'

const FormTask = () =>{

    const context = useContext(proyectContext)

    const { activeProyect } = context

    const [state, setState] = useState({
        task:''
    })

    const {task} = state

    const changeTask = (e) =>{
        console.log(e.target)
        setState({
            ...state,
            [e.target.name] : e.target.value
        })
    }

    if(!activeProyect) return null
    
    return(
            <form>
                <div>
                    <input
                        type = "text"
                        placeholder = "Name Task"
                        id = "task"
                        name = "task"
                        value = {task}
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