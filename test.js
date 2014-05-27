var random_port = require('./index.js');

random_port(console.log);
random_port({from: 20000}, console.log);
random_port({from: 20000, range: 10}, console.log);
