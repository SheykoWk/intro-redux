const INITIAL_STATE = {
    counter: 0,
    userToken: '',
    themeBlack: false
}


const rootReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case '@counter/increment':
            return {
                ...state,
                counter: state.counter + 1
            }
        case '@counter/decrement':
            return {
                ...state,
                counter: state.counter - 1
            };
        case '@counter/reset':
            return {
                ...state,
                counter: 0
            };
        default:
            return state;
    }
}

export default rootReducer