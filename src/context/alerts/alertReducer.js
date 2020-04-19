import {ALERT_TRUE, ALERT_FALSE} from '../../types'

export default (state, action) => {

    switch(action.type){
        case ALERT_TRUE:
            return{
                alert: action.payload
            }
        case ALERT_FALSE:
            return{
                alert: null
            }

        default:
            return state
    }

}