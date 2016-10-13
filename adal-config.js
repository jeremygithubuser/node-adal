var clientId = '114cf598-4fff-42c3-80e9-9cd1025206af';
var clientSecret = 'GUu9ZtM3tAQMtK9+rVx+9YhBxOUdrgEHcwlHGsNwlig='
var authorityHostUrl = 'https://login.windows.net';
var tenant = 'd540fc2e-db24-4ad7-8c51-99f00b13f134';
var authorityUrl = authorityHostUrl + '/' + tenant;
var redirectUri = 'http://adal-node.com:5858/login';
var resource = 'https://graph.microsoft.com/';
var responseMode = 'form_post';
var scope = 'openid';
var templateAuthzUrl = 'https://login.windows.net/' +
    tenant +
    '/oauth2/authorize?response_type=id_token+code&client_id=' +
    clientId +
    '&redirect_uri=' +
    redirectUri +
    '&state=<state>' +
    '&scope=' +
    scope +
    '&response_mode=' +
    responseMode +
    '&nonce=7362CAEA-9CA5-4B43-9BA3-34D7C303EBA7&resource=' +
    resource;
module.exports = {
    clientId: clientId,
    clientSecret: clientSecret,
    authorityHostUrl: authorityHostUrl,
    tenant: tenant,
    authorityUrl: authorityUrl,
    redirectUri: redirectUri,
    resource: resource,
    templateAuthzUrl: templateAuthzUrl
};