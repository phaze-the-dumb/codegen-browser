class Err{
    constructor(code, msg){
        this.code = code;
        this.msg = msg;
        this.ok = false
    }
    toJSON(){
        return {
            code: this.code,
            msg: this.msg,
            ok: this.ok
        }
    }
}

module.exports = {
    Err,
    '404': new Err(404, 'Page Not Found'),
    '400': new Err(400, 'Bad Request'),
    '500': new Err(500, 'Internal Server Error'),
    '403': new Err(403, 'Unauthorized')
}