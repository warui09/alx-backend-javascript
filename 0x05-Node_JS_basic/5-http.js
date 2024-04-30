const http = require('http');
const url = require('url');

const PORT = 1245;
const HOST = 'localhost';

const app = http.createServer((req, res) => {
  const reqUrl = url.parse(req.url).pathname;

  if (reqUrl === '/') {
    res.write('Hello Holberton School!');
    res.end();
  }

  if (reqUrl === '/students') {
    res.write('This is the list of our students\n');
    res.write('Number of students: 10\n');
    res.write('Number of students in CS: 6. List: Johann, Arielle, Jonathan, Emmanuel, Guillaume, Katie\n');
    res.write('Number of students in SWE: 4. List: Guillaume, Joseph, Paul, Tommy');
    res.end();
  }

  if (reqUrl === '') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write('Hello Holberton School!');
    res.end();
  }
});

app.listen(PORT, HOST, () => {
  console.log(`Server running at http://${HOST}:${PORT}/`);
});

module.exports = app;
