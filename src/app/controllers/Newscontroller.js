class NewsController {
    // [GET] /news
    index(red, res) {
        res.render('news');
    }

    // [GET] /news/:slug(show)
    show(red, res) {
        res.send(`<h1>SHow</h1>`);
    }
}

module.exports = new NewsController();
