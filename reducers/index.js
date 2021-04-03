import { combineReducers } from 'redux'
import { LOGIN, SIGNUP, UPDATE_EMAIL, UPDATE_PASSWORD, UPDATE_PETNAME, UPDATE_LOCATION, UPDATE_AGE, UPDATE_INFOR } from '../actions/user'

const user = (state = {}, action) => {
    switch (action.type) {
        case LOGIN:
            return action.payload
        case SIGNUP:
            return action.payload
        case UPDATE_EMAIL:
            return { ...state, email: action.payload }
        case UPDATE_PASSWORD:
            return { ...state, password: action.payload }
        case UPDATE_PETNAME:
            return { ...state, petname: action.payload }
        case UPDATE_LOCATION:
            return { ...state, location: action.payload }
        case UPDATE_AGE:
            return { ...state, age: action.payload }
        case UPDATE_INFOR:
            return { ...state, infor: action.payload }
        default:
            return state
    }
}

const rootReducer = combineReducers({
    user
})

export default rootReducer