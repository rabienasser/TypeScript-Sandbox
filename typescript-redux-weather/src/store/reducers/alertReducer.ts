import { SET_ALERT, AlertAction } from "../types"

interface AlertState {
    message: string
}

const initialState: AlertState = {
    message: ''
}

const alertReducer = (state: AlertState = initialState, action: AlertAction): AlertState => {
    switch(action.type) {
        case SET_ALERT:
            return {
                message: action.payload
            }
        default: return state
    }
}

export default alertReducer