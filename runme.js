// https://www.c-sharpcorner.com/article/creating-server-and-host-html-page-using-node-js/
import { join } from 'path';
let fs = require('fs');
let http = require('http');
let url = require('url');

let server = http.createServer(function (request, response) {
  let path = url.parse(request.url).pathname;
  switch (path) {
    case '/':
      response.writeHead(200, {
        'Content-Type': 'text/plain',
      });
      response.write('This is Test Message 2.0 !!.');
      response.end();
      break;
    case '/html/HtmlPage1.html':
      fs.readFile(join(__dirname, path), function (error, data) {
        if (error) {
          response.writeHead(404);
          response.write(error);
          response.end();
        } else {
          response.writeHead(200, {
            'Content-Type': 'text/html',
          });
          response.write(data);
          response.end();
        }
      });
      break;
    case '/html/HtmlPage2.html':
      fs.readFile(join(__dirname, path), function (error, data) {
        if (error) {
          response.writeHead(404);
          response.write(error);
          response.end();
        } else {
          response.writeHead(200, {
            'Content-Type': 'text/html',
          });
          response.write(data);
          response.end();
        }
      });
      break;
    case '/HtmlPage4.html':
      fs.readFile(join(__dirname, path), function (error, data) {
        if (error) {
          response.writeHead(404);
          response.write(error);
          response.end();
        } else {
          response.writeHead(200, {
            'Content-Type': 'text/html',
          });
          response.write(data);
          response.end();
        }
      });
      break;
    case '/index.html':
      fs.readFile(join(__dirname, path), function (error, data) {
        if (error) {
          response.writeHead(404);
          response.write(error);
          response.end();
        } else {
          response.writeHead(200, {
            'Content-Type': 'text/html',
          });
          response.write(data);
          response.end();
        }
      });
      break;
    default:
      response.writeHead(404);
      response.write("Doesn't exist really - 404");
      response.end();
      break;
  }
});
server.listen(3000);
