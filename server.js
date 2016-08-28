var AlexaAppServer = require('alexa-app-server');

var port = process.env.PORT || 8080;

var server = new AlexaAppServer({
  httpsEnabled: false,
  port: port
});

server.start();
