var clientId = 'c02bbe8f-e652-450a-948c-32b466d2ba4a';
var clientSecret = 'Lyk7haokXTaRoydZaSpkr04aUzSzx6l+irQkmX2pyqU='
var authorityHostUrl = 'https://login.windows.net';
var tenant = 'fcd5335e-545d-4769-ba4d-3f1f2f453f48';
var authorityUrl = authorityHostUrl + '/' + tenant;
var redirectUri = 'https://node-adal.cloudapp.net/login';
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