var express = require('express')
var serveStatic = require('serve-static')
var port = process.env.PORT || 8080;
var app = express()

app.use(serveStatic(__dirname, {'index': ['index.html']}))
app.listen(port)
