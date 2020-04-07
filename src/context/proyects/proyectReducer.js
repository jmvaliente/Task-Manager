import {NEW_PROYECT} from '../../types'

export default (state,action) => {
    switch (action.type) {
        case NEW_PROYECT:
            return{
                ...state,
                newProyect: action.payload
            }
    
        default:
            return state
    }
}