class ApiError extends Error{
    constructor(mess="Something went bad!!",statusCode){
        super(mess);
        this.statusCode=statusCode
    }
}

export default ApiError;