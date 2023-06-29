export default class ParamsException extends Error {
    constructor({ code, msg }) {
        super();
        this.code = code;
        this.msg = msg;
    }
}