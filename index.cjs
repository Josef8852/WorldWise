/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */

const jsonServer = require('json-server');
const path = require('path');

const server = jsonServer.create();

const router = jsonServer.router(path.join(__dirname, 'data', 'cities.json'));
const middlewares = jsonServer.defaults({
  static: path.join(__dirname, 'dist'),
});

server.use(middlewares);

server.use((req, res, next) => {
  if (req.method === 'GET' && !req.path.startsWith('/cities')) {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'));
  } else {
    next();
  }
});

server.use(router);

const PORT = process.env.PORT || 9000;
server.listen(PORT, () => {
  console.log(`JSON Server is running on port ${PORT}`);
});