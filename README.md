# node-adal
https://github.com/expressjs/cookie-session
https://github.com/expressjs/session
https://github.com/AzureAD/azure-activedirectory-library-for-nodejs
http://expressjs.com/fr/guide/error-handling.html

url de redirection http://adal-node.com:5858/redirectToAzureAuthEndPoint
url de connection http://adal-node.com:5858/login
https://github.com/AzureAD/azure-activedirectory-library-for-nodejs

/*Generate key with open SSL*/
openssl req -newkey rsa:2048 -new -nodes -x509 -days 3650 -keyout C:\NodeCerts\NodeKey.pem -out C:\NodeCerts\NodeCert.pem -config C:\OpenSSL-Win64\bin\openssl.cfg
openssl x509 -inform pem -in C:\NodeCerts\NodeCert.pem -noout -text