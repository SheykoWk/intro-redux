//react, vue, angular, svelte

//const reducer = (state, action) => newState 
const reducer = (state = 0, action) => {
    const {type} = action
    if(type ==="@counter/increment"){
        return state + 1
    }
    if(type ==="@counter/decrement"){
        return state - 1
    }
    if(type ==="@counter/reset"){
        return 0
    }
    return state
}

const counterIncrement = {
    type: "@counter/increment",
}
const counterDecrement = {
    type: "@counter/decrement",
}
const counterReset = {
    type: "@counter/reset",
}

/*
@counter/increment
@counter/decrement
@counter/reset

@user/login
@user/logout

@theme/setDark
@theme/setLight

*/ 
