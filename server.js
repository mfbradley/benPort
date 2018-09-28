var express = require('express');
var exphbs = require('express-handlebars');
var path = require('path');

var app = express();
var PORT = process.env.PORT || 8081;

app.use(express.static('public'))

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, 'index.html' ))
})

// app.get('/laydowns', function(req, res) {
//     res.sendFile(path.join(__dirname, './index.html'))
// })

app.listen(PORT, function() {
    console.log('App listening on port:' + PORT);
})

