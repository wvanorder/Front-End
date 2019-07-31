import {
    LOGIN_START,
    LOGIN_SUCCESS,
    SIGNUP,
} from '../actions';

//DUMMY DATA used to explain Store and action stuff to teammates

const initialState = {
    user: '',
    loggedIn: false,
    isLoading: false,
    error: '',
    favoriteColor: '',
    weather: '',
    
};

const reducer = (state = initialState, action) => {
    switch(action.type){
        case LOGIN_START:
            return{
                ...state,
                isLoading: true,
                error: '',
            }
        case LOGIN_SUCCESS:
            return{
                ...state,
                user: action.payload.user,
                loggedIn: true,
                isLoading: false,
                error: ''
            }
        case SIGNUP:
            return{
                ...state,
                error: '',
                loggingIn: false,
                user: '',
            }
        
        default:
        return state;
    }
};

export default reducer;