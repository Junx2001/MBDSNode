class Url {
    static NEW_PASSWORD_URL = process.env.RESET_PASSWORD_URL;
    static API_ROUTE = '/api'
    static USER_ROUTE = this.API_ROUTE+'/users';
    static ASSIGNMENT_ROUTE = this.API_ROUTE+'/assignment';

}

module.exports = Url;