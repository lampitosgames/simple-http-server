const http = require('http');
const htmlHandler = require('./htmlResponses.js');
const textHandler = require('./textResponses.js');
const jsonHandler = require('./jsonResponses.js');
const imageHandler = require('./imageResponse.js');

const port = process.env.PORT || process.env.NODE_PORT || 3000;

const onRequest = (req, res) => {
  switch (req.url) {
    case '/':
      htmlHandler.getIndex(req, res);
      break;
    case '/page2':
      htmlHandler.getPage2(req, res);
      break;
    case '/hello':
      textHandler.getHello(req, res);
      break;
    case '/time':
      textHandler.getTime(req, res);
      break;
    case '/helloJSON':
      jsonHandler.getHelloJSON(req, res);
      break;
    case '/timeJSON':
      jsonHandler.getTimeJSON(req, res);
      break;
    case '/dankmemes':
      imageHandler.getImage(req, res);
      break;
    default:
      htmlHandler.getIndex(req, res);
      break;
  }
};

http.createServer(onRequest).listen(port);
