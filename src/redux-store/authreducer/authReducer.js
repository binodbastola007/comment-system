const initialState = {
    user: null,
    error: "Invalid username and password",
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SIGN_UP_SUCCESS':
        case 'SIGN_IN_SUCCESS':
            return {
                ...state,
                user: action.payload,
                error: null,
            };
        case 'SIGN_IN_FAILURE':
            return {
                ...state,
                user: null,
                error: action.payload,
            };
        case 'SIGN_OUT':
            return {
                ...state,
                user: null,
                error: null,
            };
        default:
            return state;
    }
};

export default authReducer;
