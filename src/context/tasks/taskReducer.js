// types
import {LIST_TASK, ADD_TASK, DELETE_TASK, STATE_TASK} from '../../types'

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
        case STATE_TASK:
            return{
                ...state,
                tasks: state.tasks.map(el => el.id === action.payload.id ? action.payload : el)
            }
    
        default:
             return state
    }
}