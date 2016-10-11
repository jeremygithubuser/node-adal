var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var session = require('express-session');
var cookieSession = require('cookie-session')
var authMiddleware = require('./authMiddleware');
var app = express();

/*app.use(session({
    name: "node-adal-session",
    secret: "toutankhamon",
    resave: false,
    saveUninitialized: false,
    cookie: { secure: false }
}));*/
app.use(function (req, res, next) {
    next();
});

app.use(cookieSession({
    name: 'node-adal-cookie-session',
    maxAge: 5000,
    keys: ['toutankhamon'],
    httpOnly: true
}))

if (app.get('env') === 'production') {
    session.cookie.secure = true // serve secure cookies
}

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json({
    type: "application/json"
}));

app.use(express.static(path.join(__dirname, '/')));
app.get('/api/setUserInfos', function (req, res) {
    req.session.user = { name: "jim" }
    res.send(JSON.stringify({ userName: req.session.user.name }));
});
app.get('/api/userInfos', authMiddleware, function (req, res) {
    res.send(JSON.stringify({ userName: req.session.user.name }));
});
app.get('/api/signOut', function (req, res) {
    req.session = null
    res.send(JSON.stringify({ userName: req.session.user.name }));
});


app.listen(5858);