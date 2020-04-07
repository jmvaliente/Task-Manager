import {NEW_PROYECT, LIST_PROYECT, ADD_PROYECT, VALIDATE_NEW_PROYECT, ACTIVE_PROYECT} from '../../types'

export default (state,action) => {
    switch (action.type) {
        case NEW_PROYECT:
            return{
                ...state,
                newProyect: action.payload
            }
        case LIST_PROYECT:
            return{
                ...state,
                stateListProyect: action.payload
            }
        case ADD_PROYECT:
            return{
                ...state,
                stateListProyect: [...state.stateListProyect, action.payload],
                newProyect: false,
                validateNewProyect: true
            }
        case VALIDATE_NEW_PROYECT:
            return{
                ...state,
                validateNewProyect: action.payload
            }
        case ACTIVE_PROYECT:
            return{
                ...state,
                activeProyect: state.stateListProyect.filter(el => el === action.payload)
            }
    
        default:
            return state
    }
}