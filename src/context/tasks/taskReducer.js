// types
import {LIST_TASK, ADD_TASK, DELETE_TASK} from '../../types'

export default (state,action) => {
    switch (action.type) {
        
        case LIST_TASK:
            return{
                ...state,
                activeTasks: state.tasks.filter(el => el.proyectId === action.payload)
        }
        case ADD_TASK:
            return{
                ...state,
                tasks: [...state.tasks, action.payload]
            }
        case DELETE_TASK:
            return{
                ...state,
                tasks: state.tasks.filter( el => el.id !== action.payload)
            }
    
        default:
             return state
    }
}