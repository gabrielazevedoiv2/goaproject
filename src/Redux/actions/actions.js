export const actionTypes = {
    LOGIN: "LOGIN"
}

export const login = (user, pass) => ({
    type: actionTypes.LOGIN,
    payload: {
        user, pass
    }
})

