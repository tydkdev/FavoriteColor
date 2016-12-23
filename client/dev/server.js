var express = require('express')
var serveStatic = require('serve-static')
var port = process.env.PORT || 3000;
var app = express()


app.use(serveStatic(__dirname, {'index': ['index.html']}))
app.listen(port)

// to start: PORT=3004 node client/dev/server.js
