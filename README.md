node-random-port
================

get a free random tcp port and pass to the callback


Usage:

    var random_port = require('./index.js');

    random_port(console.log); // default will return a port from 15000 to 15099

    random_port({from: 20000}, console.log);

    random_port({from: 20000, range: 10}, console.log);
