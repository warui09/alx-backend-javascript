/**
 * Creates a small HTTP server using Node's HTTP module
 */

const app = require('http');

app.createServer((req, res) => {
  res.write('Hello Holberton School!');
  res.end();
}).listen(1245);
