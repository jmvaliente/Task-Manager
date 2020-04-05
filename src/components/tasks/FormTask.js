import React, {useState} from 'react'

const FormTask = () =>{

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