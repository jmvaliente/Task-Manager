import React, {useReducer} from 'react'
import TaskContext from './taskContext'
import taskReducer from './taskReducer'

import {v4 as uuid} from 'uuid'

import {LIST_TASK, ADD_TASK, DELETE_TASK, STATE_TASK, ACTIVE_TASK, EDIT_TASK} from '../../types'

const TaskState = props =>{
    const initalState = {
        tasks:[
            {name: "Update System", complete: false, proyectId: 1, id:1},
            {name: "Change Colors", complete: false, proyectId: 2, id:2},
            {name: "Change UI", complete: true, proyectId: 3, id:3},
            {name: "Update Images", complete: true, proyectId: 4, id:4},
            {name: "Update System", complete: false, proyectId: 2, id:5},
            {name: "Change Colors", complete: false, proyectId: 4, id:6},
            {name: "Change UI", complete: true, proyectId: 4, id:7},
            {name: "Update Images", complete: true, proyectId: 2, id:8},
            {name: "Update System", complete: false, proyectId: 2, id:9},
            {name: "Change Colors", complete: false, proyectId: 1, id:10},
            {name: "Change UI", complete: true, proyectId: 4, id:11},
            {name: "Update Images", complete: true, proyectId: 2, id:12}
        ],
        activeTasks: null,
        taskEdit: null
    }

    const [state,dispatch] = useReducer(taskReducer, initalState)

    const listTaskFn = (taskId) => {
        dispatch({
            type: LIST_TASK,
            payload: taskId
        })
    }

    const addTaskFn = (task) =>{
        task.id = uuid()
        dispatch({
            type: ADD_TASK,
            payload: task
        })
    }

    const deleteTaskFn = (taskId) =>{
        dispatch({
            type: DELETE_TASK,
            payload: taskId
        })
    }

    const stateTaskFn = (task) => {
        dispatch({
            type: STATE_TASK,
            payload: task
        })
    }

    const activeTasksFn = (task) => {
        dispatch({
            type: ACTIVE_TASK,
            payload: task
        })
    }

    const editTaskFn = (task) => {
        dispatch({
            type: EDIT_TASK,
            payload: task
        })
    }

    return(
        <TaskContext.Provider
            value={{
                tasks: state.tasks,
                activeTasks : state.activeTasks,
                taskEdit: state.taskEdit,

                listTaskFn,
                addTaskFn,
                deleteTaskFn,
                stateTaskFn,
                activeTasksFn,
                editTaskFn
            }}
        >
            {props.children}

        </TaskContext.Provider>


    )
}

export default TaskState