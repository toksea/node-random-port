var net = require('net');

var random_port = function() {
    var cb,
        opts = {};

    if (arguments.length == 0) {
        throw "no callback";
    }
    else if (arguments.length == 1) {
        cb = arguments[0];
    }
    else {
        opts = arguments[0];
        cb = arguments[arguments.length - 1];
    }

    if (typeof cb != 'function') {
        throw "callback is not a function";
    }

    if (typeof opts != 'object') {
        throw "options is not a object";
    }

    var from = opts.from > 0 ? opts.from : 15000,
        range = opts.range > 0 ? opts.range : 100,
        port = from + ~~(Math.random() * range);

    /** @todo only root can listen to ports less than 1024 */

    var server = net.createServer();
    server.listen(port, function (err) {
        server.once('close', function () {
            cb(port);
        });
        server.close();
    });
    server.on('error', function (err) {
        random_port(opts, cb);
    });
};

module.exports = random_port;
