var path = require("path");

module.exports = function (app) {

    app.get('/', function (req, res) {
        res.sendFile(path.join(__dirname, '../public/index.html'))
    })

    app.get('/editorial', function (req, res) {
        res.sendFile(path.join(__dirname, '../public/editorial.html'))
    })

    app.get('/laydowns', function (req, res) {
        res.sendFile(path.join(__dirname, '../public/laydowns.html'))
    })

    app.get('/tableTop', function (req, res) {
        res.sendFile(path.join(__dirname, '../public/tableTop.html'))
    })

    app.get('/gifs', function (req, res) {
        res.sendFile(path.join(__dirname, '../public/gifs.html'))
    })
    app.get('/about', function (req, res) {
        res.sendFile(path.join(__dirname, '../public/about.html'))
    })

    app.get('/contact', function (req, res) {
        res.sendFile(path.join(__dirname, "../public/contact.html"))
    })

}