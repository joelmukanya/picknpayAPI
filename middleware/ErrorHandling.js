require('dotenv').config();
function errorHandling(err, req, res, next) {
    if(err){
        res.status(err.statusCode).json(
            {
                msg: "An error occurred. Please try again later."
            }
        )
    }
    // Go to the next middleware
    next();
}
module.exports = errorHandling;
