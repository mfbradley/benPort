var path = require("path");

module.exports = function(app) {

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '../public/index.html' ))
})

app.get('/editorial', function(req, res) {
    res.sendFile(path.join(__dirname, '../public/editorial.html'))
})

app.get('/laydowns', function(req, res) {
    res.sendFile(path.join(__dirname, '../public/laydowns.html'))
})
}