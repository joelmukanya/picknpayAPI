require('dotenv').config();
function errorHandling(err, req, res, next) {
    res.locals.error = err;
    if(err.status >= 100 && err.status < 600){
        res.status(err.status).json(
            {
                msg: "An error occurred. Please try again later."
            }
        )
    }else {
        res.status(500);
    }
    res.render('error');
    next();
}
module.exports = errorHandling;
