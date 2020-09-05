const http = require('http');
const app = require('./api/app')


const port = process.env.PORT || 3200;

const server = http.createServer(app);
server.listen(port);
console.log("Server is running on " +port);