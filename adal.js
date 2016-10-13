module.exports = function (adalConfig) {
  var crypto = require('crypto');
  var AuthenticationContext = require('adal-node').AuthenticationContext;

  function createAuthorizationUrl(state) {
    return adalConfig.templateAuthzUrl.replace('<state>', state);
  }

  function redirectToAzureAuthEndPoint(req, res) {
    crypto.randomBytes(48, function (ex, buf) {
      var token = buf.toString('base64').replace(/\//g, '_').replace(/\+/g, '-');

      res.cookie('authstate', token);
      var authorizationUrl = createAuthorizationUrl(token);

      res.redirect(authorizationUrl);
    });
  }

  function login(req, res) {
    if (req.cookies.authstate !== req.body.state) {
      res.send('error: state does not match');
    }
    else {
      var authenticationContext = new AuthenticationContext(adalConfig.authorityUrl);
      var idToken =  req.body.id_token;
      authenticationContext.acquireTokenWithAuthorizationCode(
        req.body.code,
        adalConfig.redirectUri,
        adalConfig.resource,
        adalConfig.clientId,
        adalConfig.clientSecret,
        function (err, response) {
          var errorMessage = '';
          if (err) {
            errorMessage = 'error: ' + err.message + '\n';
          }
          response.id_token = idToken;
          errorMessage += 'response: ' + JSON.stringify(response);
          res.send(errorMessage);
        }
      );
    }

  }

  return {
    redirectToAzureAuthEndPoint: redirectToAzureAuthEndPoint,
    login: login
  };
}