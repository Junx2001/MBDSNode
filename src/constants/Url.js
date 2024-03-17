class Url {
    static NEW_PASSWORD_URL = process.env.RESET_PASSWORD_URL;
    static API_ROUTE = '/api'
    static USER_ROUTE = this.API_ROUTE+'/users';
    static USER_LOGIN_ROUTE = this.API_ROUTE+'/login';
    static USER_RESET_PASSWORD = this.API_ROUTE+'/reset-password';
}

module.exports = Url;