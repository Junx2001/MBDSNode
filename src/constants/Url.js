class Url {
    static NEW_PASSWORD_URL = process.env.RESET_PASSWORD_URL;
    static API_ROUTE = '/api'
    static USER_ROUTE = this.API_ROUTE+'/users';
    static ASSIGNMENT_ROUTE = this.API_ROUTE+'/assignment';
    static SUBJECT_ROUTE = this.API_ROUTE+'/subject';
    static HEALTH_STATUS = this.API_ROUTE+'/health';

}

module.exports = Url;