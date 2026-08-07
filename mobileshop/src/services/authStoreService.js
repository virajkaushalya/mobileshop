let jwtToken = null;

export function setToken(token) {
    jwtToken = token;
}

export function getToken() {
    return jwtToken;
}

export function clearToken() {
    jwtToken = null;
}