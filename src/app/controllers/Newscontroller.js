class NewsController {
    // [GET] /news
    index(req, res) {
        res.render('news');
    }

    // [GET] /news/:slug(show)
    show(req, res) {
        res.send(`<h1>SHow</h1>`);
    }
}

module.exports = new NewsController();
