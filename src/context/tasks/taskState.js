import React, {useReducer} from 'react'
import TaskContext from './taskContext'
import taskReducer from './taskReducer'

const TaskState = props =>{
    const initalState = {
        tasks:[]
    }

    const [state,dispatch] = useReducer(taskReducer, initalState)

    return(
        <TaskContext.Provider
            value={{
                tasklist: state.task
            }}
        >
            {props.children}

        </TaskContext.Provider>


    )
}

export default TaskState