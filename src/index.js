/**
 * Returns a number for test
 * @return {number}
 */
export function myModule() {
  let http = require('http');
  let server = http.createServer(function (request, response) {
    response.writeHead(200, {
      'Content-Type': 'text/plain',
    });
    response.write('This is Test Message.');
    response.end();
  });
  //server.listen(8082);
  return 42;
}