/* eslint-disable no-path-concat */
import { readFile } from 'fs';
import { createServer } from 'http';
import { parse } from 'url';

let server = createServer(function (request, response) {
  let path = parse(request.url).pathname;
  switch (path) {
    case '/':
      response.writeHead(200, {
        'Content-Type': 'text/plain',
      });
      response.write('This is Test Message !!.');
      response.end();
      break;
    case '/html/HtmlPage1.html':
      readFile(__dirname + path, function (error, data) {
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
      readFile(__dirname + path, function (error, data) {
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
      readFile(__dirname + path, function (error, data) {
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
      response.write("opps this doesn't exist - 404");
      response.end();
      break;
  }
});
server.listen(5500);
