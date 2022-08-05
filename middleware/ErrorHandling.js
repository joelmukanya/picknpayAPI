require('dotenv').config();
function errorHandling(err, req, res, next) {
    if(err){
        if(err.status >= 100 && err.status < 600){
            res.status(err.status).json(
                {
                    msg: "An error occurred. Please try again later."
                }
            )
        }
    }
    next();
}
module.exports = errorHandling;
