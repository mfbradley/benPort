var express = require('express');
var exphbs = require('express-handlebars');
var path = require('path');

var app = express();
var PORT = process.env.PORT || 8081;

app.use(express.static('public'))

require("./routes/htmlRoutes.js")(app)

app.listen(PORT, function() {
    console.log('App listening on http://localhost:' + PORT);
})

