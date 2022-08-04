require('dotenv').config();
function errorHandling(err, req, res, next) {
    // Check if the connection was lost.
    if(localStorage.getItem('dbConnection').length > 0){
        res.json({
            msg: localStorage.getItem('dbConnection')
        })
    }
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
