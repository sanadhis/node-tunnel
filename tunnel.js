'use strict';

const minimist = require('minimist');

let args = minimist(process.argv.slice(2), {  
    default: {
        port: 8080
    },
});

var localtunnel = require('localtunnel');
var port        = args.port;
var domain      = args.domain;

var tunnel = localtunnel(port, { subdomain: domain }, function(err, tunnel) {
    if (err) {
        console.log(err);
    }
    else{
        tunnel.url;
        console.log(tunnel.url);
    }

});

tunnel.on('close', function() {
    // tunnels are closed
});