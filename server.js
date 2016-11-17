var express = require('express');
var path = require('path');
var fs = require('fs');
var https = require('https');
var bodyParser = require('body-parser');
var session = require('express-session');
var cookieParser = require('cookie-parser');
var cookieSession = require('cookie-session');
var authMiddleware = require('./authMiddleware');
var adalConfig = require('./client-app-config');
var adal = require('./adal')(adalConfig);
var app = express();
console.log(adalConfig.templateAuthzUrl);
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

app.use(cookieParser('toutankhamon'))

app.use(cookieSession({
    name: 'node-adal-cookie-session',
    domain : 'node-adal.cloudapp.net',
    maxAge: 3600000,
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

app.get('/redirectToAzureAuthEndPoint', adal.redirectToAzureAuthEndPoint);

app.post('/login', adal.login);

app.get('/api/setUserInfos', function (req, res) {
    req.session.user = { name: "jim" }
    res.send(JSON.stringify({ userName: req.session.user.name }));
});

app.get('/api/userInfos', authMiddleware, function (req, res) {
    res.send(JSON.stringify({ userName: req.session.user.name }));
});

app.get('/api/signOut', function (req, res) {
    req.session = null
});


app.listen(5858);
/*https.createServer({
      key: fs.readFileSync('key.pem'),
      cert: fs.readFileSync('cert.pem')
}, app).listen(443);*/