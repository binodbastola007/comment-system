export const signUp = (username, password) => (dispatch) => {
    const user = { username, password };
    localStorage.setItem('user', JSON.stringify(user));
    dispatch({ type: 'SIGN_UP_SUCCESS', payload: user });
};

export const signIn = (username, password) => (dispatch) => {
    const storedUser = JSON.parse(localStorage.getItem('user'));

    if (storedUser && storedUser.username === username && storedUser.password === password) {
        dispatch({ type: 'SIGN_IN_SUCCESS', payload: storedUser });
    } else {
        dispatch({ type: 'SIGN_IN_FAILURE', payload: 'Invalid username or password' });
    }
};

export const signOut = () => (dispatch) => {
    localStorage.removeItem('user');
    dispatch({ type: 'SIGN_OUT' });
};
