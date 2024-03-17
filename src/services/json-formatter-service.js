const formatJsonRespoonse = (success = true, message, status_code, data) => {
    return {
        success: success,
        message: message,
        status_code: status_code,
        data: data,
    };
}

module.exports = {
    formatJsonRespoonse
};