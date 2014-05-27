var net = require('net');

var random_port = function(cb) {
    /** @todo handle opts */
    var from = 15000,
        range = 100,
        port = from + ~~(Math.random() * range);

    var server = net.createServer();
    server.listen(port, function (err) {
        server.once('close', function () {
            cb(port);
        });
        server.close();
    });
    server.on('error', function (err) {
        get_port(cb);
    });
};

module.exports = random_port;
