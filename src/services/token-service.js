import config from '../config'

const TokenService = {
    saveAuthToken(token) {
        window.localStorage.setItem(config.TOKEN_KEY, token)
    },
    getAuthToken() {
        return window.localStorage.getItem(config.TOKEN_KEY)
    },
    clearAuthToken() {
        window.localStorage.removeItem(config.TOKEN_KEY)
    },
    hasAuthToken() {
        return !!TokenService.getAuthToken()
    },
    makeBasicAuthToken(user_name, password) {
        return window.btoa(`${user_name}: ${password}`)
    },
    getUserIdFromToken() {
        const authToken = TokenService.getAuthToken()
        console.log('authToken', authToken)
        const bearerToken = authToken.slice(7, authToken.length)
        const base64URL = bearerToken.split('.')[1]
        let base64 = base64URL.replace('-', '+').replace('_', '/')
        let decodedToken = JSON.parse(Buffer.from(base64, 'base64').toString('binary'))
        console.log('decodedToken', decodedToken)
        const user_id = decodedToken.user_id
        console.log('user_id', user_id)
        return user_id
    }
}

export default TokenService