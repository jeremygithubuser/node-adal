var clientId = 'cd014b53-995d-458a-a42f-1c8f20076684';
var clientSecret = '48BS7yBAAHZMaruUSHLEyeS0cW4fc3+19a+vz2MhCmM='
var authorityHostUrl = 'https://login.windows.net';
var tenant = 'fcd5335e-545d-4769-ba4d-3f1f2f453f48';
var authorityUrl = authorityHostUrl + '/' + tenant;
var redirectUri = 'http://adal-node.com:5858/login';
var resource = 'https://node-adal.cloudapp.net';
var responseMode = 'form_post';
var scope = 'openid 1ac54690-9d39-4f9f-b133-0411d599b61e';
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