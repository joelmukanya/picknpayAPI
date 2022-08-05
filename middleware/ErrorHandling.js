require('dotenv').config();
function errorHandling(err, req, res, next) {
    if(err){
        console.log(err.status);
        res.status(err.status).json(
            {
                msg: "An error occurred. Please try again later."
            }
        )
    }
    next();
}
module.exports = errorHandling;
