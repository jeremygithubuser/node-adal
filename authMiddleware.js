module.exports = function (req, res, next) {
    if (req.session.user) {
        next();
    }
    else {

        if (req.xhr) {
            console.log("UNAUTHORIZED AJAX CALL");
            res.sendStatus(401);
        }
        else {
            console.log("UNAUTHORIZED CALL");
            res.redirect('http://google.fr');
        }

    }
}