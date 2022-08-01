function mw(req, res, next) {
    console.log("User Auth Success!");
    next();
}


function somefunc(req, res, next) {
    console.log("Next ran!");
    next();
}

module.exports = {
    mw,
    somefunc
}