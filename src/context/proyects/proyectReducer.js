import {NEW_PROYECT, LIST_PROYECT} from '../../types'

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
                listProyect: action.payload
            }
    
        default:
            return state
    }
}