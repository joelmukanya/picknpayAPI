require('dotenv').config();
function errorHandling(err, req, res, next) {
    if(err && (err.status >= 100 && err.status < 600 )){
        res.status(err.status).json(
            {
                msg: "An error occurred. Please try again later."
            }
        )
    }
    // Go to the next middleware
    next();
}
module.exports = errorHandling;
