function login(user, pass) {
    window.localStorage.setItem("athenaLogin", JSON.stringify({
        "user": user,
        "token": pass
    }));
}