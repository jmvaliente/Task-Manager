// types
import {LIST_TASK} from '../../types'

export default (state,action) => {
    switch (action.type) {
        
        case LIST_TASK:
            return{
                ...state,
                tasks: state.tasks.filter(el => el.proyectId === action.payload)
        }
        
    
        default:
             return state
    }
}