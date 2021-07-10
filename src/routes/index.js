const newRouter = require('./news');
const siteRouter = require('./site');

function route(app) {
    // trang-news
    app.use('/news', newRouter);

    // trang-chu + ( .... site)
    app.use('/', siteRouter);
}

module.exports = route;
